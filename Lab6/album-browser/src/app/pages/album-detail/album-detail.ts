import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, catchError, finalize, of, switchMap, tap } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterLink, AsyncPipe, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);

  errorMessage = '';
  editedTitle = '';

  album$: Observable<Album | null> = this.route.paramMap.pipe(
    switchMap(params => {
      this.errorMessage = '';
      const id = Number(params.get('id'));
      if (!Number.isFinite(id) || id <= 0) {
        this.errorMessage = 'Invalid album id in URL.';
        return of(null);
      }
      return this.albumService.getAlbum(id).pipe(
        tap(album => (this.editedTitle = album.title)),
        catchError(() => {
          this.errorMessage = 'Failed to load album.';
          return of(null);
        }),
        finalize(() => {})
      );
    })
  );

  save(album: Album) {
    const updated: Album = {...album, title: this.editedTitle.trim()};
    this.albumService.updateAlbum(updated).subscribe({
      error: () => (this.errorMessage = 'Save failed.'),
    });
  }
}
