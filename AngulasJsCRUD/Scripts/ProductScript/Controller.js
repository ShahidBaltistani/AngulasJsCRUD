app.controller('productCtrl', function ($scope, productService) {
    $scope.divAdd = false;
    GetAllProduct();
    function GetAllProduct()
    {
        productService.getAllProduct().then(function (result) {
            $scope.Products = result.data;
        }, function (result) {
            alert("product Not found")
        })
    }
    $scope.AddProduct = function () {
        $scope.divAdd = true;
        $scope.productId = '';
        $scope.productName = '';
        $scope.productPrice = '';
    }

    $scope.EditFunction = function (product) {
        $scope.divAdd = true;
        $scope.productId = product.Id;
        $scope.productName = product.Name;
        $scope.productPrice = product.Price;
    }

    $scope.AddUpdateProduct = function (product) {
        var action = $scope.Action
        var product = {
            Id: $scope.productId,
            Name: $scope.productName,
            Price: $scope.productPrice
        }
        if (product.Id > 0) {
            productService.updateProduct(product)
                .then(function (result) {
                    alert(result.data)
                    GetAllProduct();
                    $scope.divAdd=false
                }
            )
        }
        else {
            productService.addProduct(product)
                .then(function (product) {
                    alert(result.data)
                    GetAllProduct();
                    $scope.divAdd = false

                })
        }
    }

    $scope.DeleteFunction = function (Id)
    {
        productService.deleteProduct(Id).then(function (result)
        {
            alert(result.data)
            GetAllProduct();

        })
    }

    $scope.Close = function () {
        $scope.divAdd = false
    }
})