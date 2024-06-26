class customheader extends HTMLElement{
    constructor( ){
        super( );
        console.log('llamando al constructor')
    }

    connectedCallback(){
        console.log('mostrandose en el html');
        this.render();
    }

    style(){
        this.innerHTML =
        `
        `;
    }

    render( ){
        this.innerHTML += ` 
        <header>
	        <nav>
			<a href="index.html"><img src="img/logos/logo-azul.svg" width="174.25px" height="50px" alt="Logo de Fundación Viva la Vida">
			</a>

		    <ul>
			    <li><a href="perritos.html" target="_self">Perritos</a></li>
			    <li><a href="index.html#sobre-la-fundacion" target="_self">Sobre la fundación</a></li>
			    <li><a href="pagenotfound.html" target="_self">Preguntas frecuentes</a></li>
			    <li><a href="colaborar.html" target="_self">Colaborar</a></li>
			    <li class="boton-destacado hover-escala-3"><a href="donar.html" target="_self">Donar</a></li>
		    </ul>
	        </nav>
        </header>
        `
    }
}

customElements.define('custom-header', customheader)




class customfooter extends HTMLElement{
    constructor( ){
        super( );
        console.log('llamando al constructor')
    }

    connectedCallback(){
        console.log('mostrandose en el html');
        this.render();
    }

    style(){
        this.innerHTML =
        `
        `;
    }

    render( ){
        this.innerHTML += ` 
        <footer>
	        <div class="footer-container">
		    <section class="site-map">
			    <nav> <a href="index.html"><img src="img/logos/isotipo-naranja.svg" width="174.25px" height="50px" alt="Logo de Fundación Viva la Vida"></a>
				<ul>
			    <li><a href="perritos.html">Perritos</a></li>
			    <li><a href="index.html#sobre-la-fundacion">Sobre la fundación</a></li>
			    <li><a href="pagenotfound.html">Preguntas frecuentes</a></li>
			    <li><a href="colaborar.html">Colaborar</a></li>
			    <li><a href="donar.html">Donar</a></li>
				</ul>
			    </nav>
		    </section>
		    <section class="formulario-contacto hover-escala-3">
			    <form method="post" action="" target="_blank" enctype="text/plain">
					<input type="text" id="nombre" name="nombre" maxlength="30" placeholder="Nombre" required>

					<input type="email" id="correo" name="correo" placeholder="Correo electrónico" required>

					<textarea id="mensaje" name="mensaje" placeholder="Mensaje" required></textarea>

					<button type="submit">Enviar</button>
			    </form>
		    </section>
		    <section class="info-contacto">
			    <div class="redes-sociales hover-escala-9"> 
					<a href="#" target="_blank"><img src="img/iconos/instagram.svg" width="38px" height="38px" alt="Logo de Instagram"></a>
					
					<a href="#" target="_blank"><img src="img/iconos/facebook.svg" width="38px" height="38px" alt="Logo de Facebook"></a>
					
					<a href="#" target="_blank"><img src="img/iconos/whatsapp.svg" width="38px" height="38px" alt="Logo de WhatsApp"></a>
				</div>

			    <div class="datos">
				<p>Hurlingham, Buenos Aires</p>
				<details>
					<summary>Alias: fundacionvivalavida</summary>
					<p>Banco Santander Rio</p>
					<p>Cuenta Corriente Nro. 197-5434/2</p>
					<p>CBU 0720197020000000543422</p>
					<p>CUIT: 30-71241612-9</p>
				</details>
			    </div>
		    </section>
	        </div>
        </footer>
        `
    }
}

customElements.define('custom-footer', customfooter)