import { BoundElementProperty, core } from '@angular/compiler';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { ElementRef, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implemnents OnInit {
  @Input() corDeFundo  = 'yellow';
  @Input() corDoTexto  = 'white';
  

  constructor(private elemento: ElementRef) { }

    ngOnInit() {
      this.mudarFundo();
    }
}

private mudarFundo(cor = 'yellow') {
  this.elemento.nativeElements.style.backgroundColor = this.corDeFundo || cor;
  this.elemento.nativeElements.style.color = this.corDoTexto;
  this.elemento.nativeElement.style.fontStyle  = 'bold';

  }



