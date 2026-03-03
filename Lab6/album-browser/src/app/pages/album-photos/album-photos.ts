import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, catchError, finalize, of, switchMap } from 'rxjs';

import { AlbumService } from '../../services/album';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
})
export class AlbumPhotos {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  loading = true;
  errorMessage = '';
  albumId = 0;

  photos$: Observable<Photo[]> = this.route.paramMap.pipe(
    switchMap(params => {
      this.loading = true;
      this.errorMessage = '';
      this.albumId = Number(params.get('id'));
      if (!Number.isFinite(this.albumId) || this.albumId <= 0) {
        this.errorMessage = 'Invalid album id in URL.';
        return of([] as Photo[]);
      }
      return this.albumService.getAlbumPhotos(this.albumId).pipe(
        catchError(() => {
          this.errorMessage = 'Failed to load photos.';
          return of([] as Photo[]);
        }),
        finalize(() => (this.loading = false))
      );
    })
  );
}
