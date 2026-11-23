import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

/** Pone la meta description de cada ruta (data.description). El <title> lo pone el router. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  init(): void {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let r = this.route;
      while (r.firstChild) r = r.firstChild;
      const description = r.snapshot.data['description'] as string | undefined;
      if (description) {
        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ property: 'og:description', content: description });
      }
    });
  }
}
