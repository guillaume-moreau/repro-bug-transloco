import { Component, inject } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslocoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'repro-bug-transloco';

  private readonly translocoService: TranslocoService =
    inject(TranslocoService);

  changeLang(): void {
    this.translocoService.setActiveLang('en');
  }
}
