using AngulasJsCRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngulasJsCRUD.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllProduct()
        {
            using (var db = new ProductDBContext())
            {
                var list = db.Products.ToList();
                return Json(list, JsonRequestBehavior.AllowGet);
            }
        }


        public string AddProduct(Product p)
        {
            using (var db = new ProductDBContext())
            {
                db.Products.Add(p);
                db.SaveChanges();
                return "Successfully Saved";
            }
        }

        public string UpdateProduct(Product p)
        {
            using (var db = new ProductDBContext())
            {
                var product = db.Products.Where(x => x.Id == p.Id).FirstOrDefault();
                product.Name = p.Name;
                product.Price = p.Price;
                db.SaveChanges();
                return "Successfully updated";
            }
        }

        public string DeleteProduct(int id)
        {
            using (var db = new ProductDBContext())
            {
                var product = db.Products.Where(x => x.Id == id).FirstOrDefault();
                db.Products.Remove(product);
                db.SaveChanges();
                return "Successfully Deleted";
            }
        }
    }
}