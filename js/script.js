$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Navbar background on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Fade in animation on scroll
    function fadeInOnScroll() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }

    // Add fade-in class to elements
    $('.card, .hero-section h1, .hero-section p').addClass('fade-in');

    // Trigger fade in on scroll and load
    $(window).on('scroll', fadeInOnScroll);
    fadeInOnScroll();

    // Counter animation for statistics (if needed later)
    function animateCounter(element, target) {
        $({ countNum: 0 }).animate({
            countNum: target
        }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
                element.text(Math.floor(this.countNum));
            },
            complete: function() {
                element.text(target);
            }
        });
    }

    // Tooltip initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Contact form handling (placeholder)
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        // Add form submission logic here
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    });

    // WhatsApp integration
    $('.btn-whatsapp').on('click', function(e) {
        e.preventDefault();
        var message = encodeURIComponent('Olá! Gostaria de saber mais sobre a ação Mãos Amigas.');
        var phone = '5511999999999'; // Replace with actual phone number
        window.open('https://wa.me/' + phone + '?text=' + message, '_blank');
    });

    // Social media sharing
    $('.share-btn').on('click', function(e) {
        e.preventDefault();
        var platform = $(this).data('platform');
        var url = encodeURIComponent(window.location.href);
        var text = encodeURIComponent('Conheça a ação voluntária Mãos Amigas!');
        
        var shareUrl = '';
        switch(platform) {
            case 'facebook':
                shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
                break;
            case 'twitter':
                shareUrl = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + text;
                break;
            case 'whatsapp':
                shareUrl = 'https://wa.me/?text=' + text + ' ' + url;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    });

    // Loading animation
    $(window).on('load', function() {
        $('.loading').fadeOut();
    });

    // Mobile menu close on link click
    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Carregar colaboradores dinamicamente
    function carregarColaboradores() {
        $.getJSON('data/colaboradores.json', function(colaboradores) {
            var container = $('#colaboradores-container');
            container.empty();
            
            colaboradores.forEach(function(colaborador) {
                var card = `
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100 text-center border-0 shadow-sm">
                            <div class="card-body p-4">
                                <div class="colaborador-foto mb-3">
                                    <div class="foto-placeholder bg-secondary d-flex align-items-center justify-content-center mx-auto" style="width: 100px; height: 100px; border-radius: 50%;">
                                        <i class="fas fa-user fa-2x text-white"></i>
                                    </div>
                                </div>
                                <h5 class="card-title">${colaborador.nome}</h5>
                                <p class="text-primary fw-bold">${colaborador.cargo}</p>
                                <p class="card-text small text-muted">${colaborador.descricao}</p>
                                <div class="social-links">
                                    ${colaborador.instagram ? `<a href="https://instagram.com/${colaborador.instagram.replace('@', '')}" class="btn btn-sm btn-outline-primary me-2" target="_blank"><i class="fab fa-instagram"></i></a>` : ''}
                                    ${colaborador.whatsapp ? `<a href="https://wa.me/${colaborador.whatsapp}" class="btn btn-sm btn-outline-success" target="_blank"><i class="fab fa-whatsapp"></i></a>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.append(card);
            });
        }).fail(function() {
            $('#colaboradores-container').html('<div class="col-12 text-center"><p class="text-muted">Erro ao carregar colaboradores</p></div>');
        });
    }

    // Carregar patrocinadores dinamicamente
    function carregarPatrocinadores() {
        $.getJSON('data/patrocinadores.json', function(patrocinadores) {
            var container = $('#patrocinadores-container');
            container.empty();
            
            patrocinadores.forEach(function(patrocinador) {
                var badgeClass = {
                    'Ouro': 'bg-warning text-dark',
                    'Prata': 'bg-secondary text-white',
                    'Bronze': 'bg-warning text-dark'
                }[patrocinador.categoria] || 'bg-primary text-white';
                
                var card = `
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100 text-center border-0 shadow-sm">
                            <div class="card-body p-4">
                                <div class="patrocinador-logo mb-3">
                                    <div class="logo-placeholder bg-light d-flex align-items-center justify-content-center mx-auto" style="width: 120px; height: 80px; border-radius: 10px;">
                                        <i class="fas fa-building fa-2x text-muted"></i>
                                    </div>
                                </div>
                                <span class="badge ${badgeClass} mb-2">${patrocinador.categoria}</span>
                                <h5 class="card-title">${patrocinador.nome}</h5>
                                <p class="card-text small text-muted">${patrocinador.descricao}</p>
                                <div class="contact-links">
                                    ${patrocinador.website ? `<a href="${patrocinador.website}" class="btn btn-sm btn-outline-primary me-2" target="_blank"><i class="fas fa-globe"></i></a>` : ''}
                                    ${patrocinador.contato.includes('@') ? `<a href="mailto:${patrocinador.contato}" class="btn btn-sm btn-outline-secondary"><i class="fas fa-envelope"></i></a>` : `<a href="tel:${patrocinador.contato}" class="btn btn-sm btn-outline-success"><i class="fas fa-phone"></i></a>`}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.append(card);
            });
        }).fail(function() {
            $('#patrocinadores-container').html('<div class="col-12 text-center"><p class="text-muted">Erro ao carregar patrocinadores</p></div>');
        });
    }

    // Carregar dados ao inicializar
    carregarColaboradores();
    carregarPatrocinadores();

    // Sistema de números da rifa
    let numerosData = [];
    let numerosSelecionados = [];
    const VALOR_NUMERO = 5.00;

    // Carregar números da rifa
    function carregarNumeros() {
        $.get('data/numeros-comprados.csv', function(data) {
            const linhas = data.split('\n').slice(1);
            numerosData = [];
            
            for (let i = 1; i <= 500; i++) {
                const numeroFormatado = i.toString().padStart(3, '0');
                const linha = linhas.find(l => l.startsWith(numeroFormatado));
                const status = linha ? linha.split(',')[1]?.trim() : 'disponivel';
                
                numerosData.push({
                    numero: numeroFormatado,
                    status: status === 'comprada' ? 'vendido' : 'disponivel'
                });
            }
            
            renderizarNumeros();
            atualizarContadores();
        }).fail(function() {
            for (let i = 1; i <= 500; i++) {
                numerosData.push({
                    numero: i.toString().padStart(3, '0'),
                    status: 'disponivel'
                });
            }
            renderizarNumeros();
            atualizarContadores();
        });
    }

    // Renderizar números com otimização
    function renderizarNumeros(filtro = 'todos') {
        const container = $('#numeros-grid');
        container.empty();
        
        let numerosVisiveis = numerosData;
        
        if (filtro === 'disponiveis') {
            numerosVisiveis = numerosData.filter(n => n.status === 'disponivel');
        } else if (filtro === 'vendidos') {
            numerosVisiveis = numerosData.filter(n => n.status === 'vendido');
        }
        
        const loteSize = 50;
        let indice = 0;
        
        function renderizarLote() {
            const lote = numerosVisiveis.slice(indice, indice + loteSize);
            
            lote.forEach(function(item) {
                const selecionado = numerosSelecionados.includes(item.numero);
                const classes = `numero-item ${item.status} ${selecionado ? 'selecionado' : ''}`;
                
                const elemento = $(`<div class="${classes}" data-numero="${item.numero}">${item.numero}</div>`);
                container.append(elemento);
            });
            
            indice += loteSize;
            
            if (indice < numerosVisiveis.length) {
                setTimeout(renderizarLote, 10);
            }
        }
        
        renderizarLote();
    }

    $(document).on('click', '.numero-item.disponivel', function() {
        const numero = $(this).data('numero');
        
        if ($(this).hasClass('selecionado')) {
            numerosSelecionados = numerosSelecionados.filter(n => n !== numero);
            $(this).removeClass('selecionado');
        } else {
            numerosSelecionados.push(numero);
            $(this).addClass('selecionado');
        }
        
        atualizarSelecao();
    });

    $('#mostrar-todos').click(function() {
        $('.btn-group .btn').removeClass('active');
        $(this).addClass('active');
        renderizarNumeros('todos');
    });

    $('#mostrar-disponiveis').click(function() {
        $('.btn-group .btn').removeClass('active');
        $(this).addClass('active');
        renderizarNumeros('disponiveis');
    });

    $('#mostrar-vendidos').click(function() {
        $('.btn-group .btn').removeClass('active');
        $(this).addClass('active');
        renderizarNumeros('vendidos');
    });

    $('#buscar-numero').on('input', function() {
        const termo = $(this).val();
        
        if (termo === '') {
            $('.numero-item').show();
        } else {
            $('.numero-item').each(function() {
                const numero = $(this).data('numero');
                if (numero.includes(termo)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });

    function atualizarSelecao() {
        const total = numerosSelecionados.length * VALOR_NUMERO;
        
        if (numerosSelecionados.length > 0) {
            $('#numeros-selecionados-section').show();
            
            const badges = numerosSelecionados.map(n => 
                `<span class="numero-selecionado-badge">${n}</span>`
            ).join(' ');
            
            $('#numeros-selecionados').html(`<div class="numeros-selecionados-list">${badges}</div>`);
            $('#total-selecionados').text(`R$ ${total.toFixed(2).replace('.', ',')}`);
        } else {
            $('#numeros-selecionados-section').hide();
        }
    }

    $('#finalizar-compra').click(function() {
        if (numerosSelecionados.length === 0) return;
        
        const total = numerosSelecionados.length * VALOR_NUMERO;
        const numeros = numerosSelecionados.join(', ');
        const mensagem = `Olá! Gostaria de reservar os números: ${numeros}\n\nTotal: R$ ${total.toFixed(2).replace('.', ',')}\n\nAguardo informações para pagamento.`;
        
        const whatsapp = 'https://wa.me/5584991911624?text=' + encodeURIComponent(mensagem);
        window.open(whatsapp, '_blank');
    });

    $('#limpar-selecao').click(function() {
        numerosSelecionados = [];
        $('.numero-item').removeClass('selecionado');
        atualizarSelecao();
    });

    function atualizarContadores() {
        const disponiveis = numerosData.filter(n => n.status === 'disponivel').length;
        $('#disponiveis-count').text(disponiveis);
    }

    carregarNumeros();

    // Parallax effect for hero section
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop();
        var parallax = $('.hero-section');
        var speed = scrolled * 0.5;
        
        parallax.css('transform', 'translateY(' + speed + 'px)');
    });

    // Add loading states to buttons
    $('.btn').on('click', function() {
        var $btn = $(this);
        if (!$btn.hasClass('no-loading')) {
            $btn.addClass('loading');
            setTimeout(function() {
                $btn.removeClass('loading');
            }, 500);
        }
    });
});