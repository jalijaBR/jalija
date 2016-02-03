var jalija = angular.module('jalija',[]);

//var url = 'http://104.236.217.35/jalija/';
var url = 'http://localhost:3002/';

jalija.controller('objeto', function($scope){
    $scope.NEWSLETTER = {
        nome: '',
        email: '',
        data: '',
        resposta: ''
    };
});

jalija.controller('newsletter', function($scope, $http){
    $scope.assinar = function(){
        $scope.NEWSLETTER.data = new Date();
        document.getElementById('botao').style.display = 'none';
        document.getElementById('gif').style.display = 'block';
        $http.post(url+'cadastrarNewsletter', $scope.NEWSLETTER)
            .success(function(retorno){
                $scope.NEWSLETTER.resposta = retorno.msg;
                $scope.NEWSLETTER.nome = '';
                $scope.NEWSLETTER.email = '';
                document.getElementById('botao').style.display = 'block';
                document.getElementById('gif').style.display = 'none';
            })
            .error(function(r){
                console.log(r);
            })
    };
    $scope.listar = function(){
        $http.get(url+'listar')
            .success(function(r){
                console.log(r);
            })
    }
});
