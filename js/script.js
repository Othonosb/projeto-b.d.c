(function ($) {
  'use strict';

  function counter() {
    var oTop;
    if ($('.counter').length !== 0) {
      oTop = $('.counter').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  $('#top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    return false;
  });

  $(document).on('ready', function () {

    $('select').niceSelect();
    $('.category-slider').slick({
      slidesToShow: 8,
      infinite: true,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 2000
    });
    $('.video-box img').click(function () {
      var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
      $(this).replaceWith(video);
    });
    $('.coupon-types li').click(function () {
      $('.coupon-types li').not(this).removeClass('active');
      $(this).addClass('active');
    });
    $('.input-group.date').datepicker({
      format: 'dd/mm/yy'
    });
    $('.btn-group > .btn').click(function () {
      $(this).find('i').toggleClass('btn-active');
    });

    
    $('#online-code').click(function () {
      $('.code-input').fadeIn(500);
    });
    $('#store-coupon, #online-sale').click(function () {
      $('.code-input').fadeOut(500);
    });

    jQuery(window).on('load', function () {

    });

  });

  $('select:not(.ignore)').niceSelect();

  $('.post-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true
  });

  $('.category-slider').slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: '<i class="fa fa-chevron-right arrow-right"></i>',
    prevArrow: '<i class="fa fa-chevron-left arrow-left"></i>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:false
        }
      }
      
    ]
  });

  $('.trending-ads-slide').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
  });

  $('.product-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: false,
    nextArrow: '<i class="fa fa-chevron-right arrow-right"></i>',
    prevArrow: '<i class="fa fa-chevron-left arrow-left"></i>',
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '" alt="product-img">';
    }
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('.range-track').slider({});
  $('.range-track').on('slide', function (slideEvt) {
    $('.value').text('$' + slideEvt.value[0] + ' - ' + '$' + slideEvt.value[1]);
  });


})(jQuery);

//FUNÇOES DA API ========= NÃO APAGAR | arquivo raiz ==============>>>>>>

const preencherFormulario = (endereco) =>{  //funcao que preenche os campos. IMPORTANTE
  document.getElementById('rua').value = endereco.logradouro;
  document.getElementById('estado').value = endereco.uf;
  document.getElementById('cidade').value = endereco.localidade;
  document.getElementById('bairro').value = endereco.bairro;
  //<<<==================ORIENTAÇÃO A OBJETOS ATIVA ===============>>>>>>
}

const pesquisarCep = async()=>{     //async determina q é uma função assicrona

  const cep = document.getElementById('cep').value; 
  //variavel que solicita o valor do imput do cep OU SEJA, o conteudo que sera digitado ali dentro.

  const url =  `http://viacep.com.br/ws/${cep}/json/unicode/`;
  //variavel que recebe o url ou chamado do servidor. ULTILIZANDO o valor do imput 'cep' como apresentado dentro do sifrão ${}

  const dados = await fetch(url); //await é necessario para evitar que a resposta final não fique pendente
  //solicita os dados do servidor de api e aguarda o resultado como uma promessa

  const endereco = await dados.json(); 
  //metodo que solicita o endereço junto com a função de 'aguarde | await' a informação pendente

  preencherFormulario(endereco);
}
document.getElementById('cep');
      addEventListener('focusout',pesquisarCep);
      

//FIM DA FUNÇÃO DA API | NÃO APAGAR =======================>>>>>>>>>>

// Recuperação de senha //

function validacaoEmail(field) {
        
        
  event.preventDefault();
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);


  
  if ((usuario.length >=1) &&
  (dominio.length >=3) &&
  (usuario.search("@")==-1) &&
  (dominio.search("@")==-1) &&
  (usuario.search(" ")==-1) &&
  (dominio.search(" ")==-1) &&
  (dominio.search(".")!=-1) &&
  (dominio.indexOf(".") >=1)&&
  (dominio.lastIndexOf(".") < dominio.length - 1)) {
      alert("Email enviado! Confira sua caixa de entrada e redefina sua senha!");
      
  }
  else{
      alert("E-mail invalido");
  }   
}
