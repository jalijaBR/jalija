var jalija = angular.module('admjalija',[]);

//var url = 'http://104.236.217.35/jalija/';
var url = 'http://localhost:3002/';

jalija.controller('adm', function($scope, $http){
    $scope.logaradm = function(){
        $http.get(url+'logaradm/'+$scope.user+'/'+$scope.pwd)
            .success(function(retorno){
                if (retorno=="true"){
                    document.getElementById('login').style.display = 'none';
                    document.getElementById('admin').style.display = 'block';
                }else{
                    $scope.resposta = 'Usuario e/ou Senha Incorretos!';
                }
            })
    };
    $scope.buscarusuariosnewsletter = function(){
        $http.get(url+'buscarusuariosnewsletter')
            .success(function(retorno){
                $scope.newsletter = retorno;
            })
    };
    $scope.buscarusuarioscadastrados = function(){
        $http.get(url+'buscarusuarioscadastrados')
            .success(function(retorno){
                $scope.usuarios = retorno;
            })
    };
    $scope.excluirusuarionewsletter = function(usuario){
        $http.get(url+'excluirusuarionewsletter/'+usuario._id)
            .success(function(retorno){
                $scope.newsletter = retorno;
            })
    };
    $scope.excluirusuariocadastrado = function(usuario){
        $http.get(url+'excluirusuariocadastrado/'+usuario._id)
            .success(function(retorno){
                $scope.newsletter = retorno;
            })
    };
    $scope.sairadm = function(){
        document.getElementById('login').style.display = 'block';
        document.getElementById('admin').style.display = 'none';
    }
});