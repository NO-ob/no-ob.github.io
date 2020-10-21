function changeTheme(){
			var theme = document.createElement('style')
			if (document.getElementById("Light")){ /* If statement which will be true if the nav theme button id is set to light */
				theme.innerHTML = "html {--pageBG:#3e3e3e;--colourBG: #616161;--colourBlocks: #212121; --colourArticle: #424242;--colourHeadtext: #0277BD;--colourSubtext: #fff;--colourArticletext: #fff; } a:link{color: #01579B;}a:hover{color: #03A9F4;}a:visited{color:#29B6F6} .menu a{color: var(--colourBG);}"; /* Sets all of the colours for the dark theme */
				document.body.style.backgroundImage = "url('./images/bg_dark.jpg')"; 
				document.getElementById("Light").innerHTML = "Light Mode"; /* Changes the text of the theme button */ 
				document.getElementById("Light").id = "Dark"; /* Changes the id of the theme button */
				localStorage.theme = "Dark";

			} else if (document.getElementById("Dark")) {
				theme.innerHTML = "html {--pageBG:#b3faf4;--colourBG: #fff;--colourBlocks: #ffb3ff;--colourArticle: #404040;--colourHeadtext: #fff;--colourSubtext: #fff;--colourArticletext: #fc7efc;} a:link {color: #d85dd4;} a:visited {color: #822a7f;} a:hover {color: #ff07f6;} .menu a{color: var(--colourBG);} "
				document.body.style.backgroundImage = "url('./images/bg.jpg')"; 
				document.getElementById("Dark").innerHTML = "Dark Mode";
				document.getElementById("Dark").id = "Light";
				localStorage.theme = "Light";
			}
			document.body.appendChild(theme);
		}
function onLoad(){
    if (localStorage.theme == "Dark"){
      changeTheme();
    }
			
		}
