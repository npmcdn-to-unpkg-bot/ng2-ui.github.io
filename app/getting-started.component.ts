import { Component } from '@angular/core';
@Component({
  template: `
<div class="container page-title">
  <h1>Getting Started</h1>
</div>
<div class="container">
  <p class="page-title-description">
    ng2-ui is a collection of quality Angular2 directives.
    To make ng2-ui available to your project, you need to install a npm package and 
    import NG2_DIRECTIVES.
  </p>
  
  <h2>NPM Install</h2>
  <pre><code class="language-bash">$ npm install ng2-ui --save</code></pre>
  
  <h2>systemjs.config.js</h2>
  <pre><code class="language-javascript">
map: {{ '{' }}
  app: "app",
  ...
  'ng2-ui': 'https://unpkg.com/ng2-ui' // <----- this
{{ '}' }},

packages: {{ '{' }}
   app: {{ '{' }}main: './main.js', defaultExtension: 'js'{{ '}' }},
   ...
   'ng2-ui': {{ '{' }} main: 'dist/index.js', defaultExtension: 'js' {{ '}' }}  // <----- this
   {{ '}' }}
}</code></pre>
      
  <h2>Usage</h2>
  <p><b>Import and include directives for your application</b>
  <p>app.component.ts
  <pre><code class="language-javascript">
//our root app component
import {{ '{' }}Component, enableProdMode{{ '}' }} from '@angular/core'
enableProdMode();

@Component({{ '{' }}
  selector: 'my-app',
  templateUrl: 'src/app.tpl.html',
{{ '}' }})
export class AppComponent {{ '{' }} ... {{ '}' }}
</code></pre>

<p><b>src/app.tpl.html</b></p>
<pre><code class="language-markup">
&lt;input [(ngModel)]="date1" ng2-datetime-picker /> 

&lt;ng2-map center="Brampton, Canada">&lt;/ng2-map> 
</code></pre>
</div>
  `
})
export class GettingStartedComponent {
  ngAfterViewInit(): void {
    window.scroll(0,0);
  }
}

