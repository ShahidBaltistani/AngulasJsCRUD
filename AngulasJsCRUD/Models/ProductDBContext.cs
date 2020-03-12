using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngulasJsCRUD.Models
{
    public class ProductDBContext : DbContext
    {
        public ProductDBContext() : base("con")
        {

        }
        public DbSet<Product> Products { get; set; }
    }
}