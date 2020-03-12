app.service("productService", function ($http) {

    this.getAllProduct = function () {
        var response = $http.get('/Product/GetAllProduct')
        return response;
    }

    this.addProduct = function (Product) {
        var response = $http({
            method: 'post',
            url: '/Product/AddProduct',
            data: JSON.stringify(Product)
        })
        return response
    }

    this.updateProduct = function (Product) {
        var response = $http({
            method: 'post',
            url: '/Product/UpdateProduct',
            data: JSON.stringify(Product)
        })
        return response
    }

    this.deleteProduct = function (Id) {
        var response = $http({
            method: 'post',
            url: '/Product/DeleteProduct',
            params: { Id: JSON.stringify(Id) }

        })
    }
})