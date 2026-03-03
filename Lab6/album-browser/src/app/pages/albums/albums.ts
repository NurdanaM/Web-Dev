import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, catchError, finalize, of } from 'rxjs';

import { AlbumService } from '../../services/album';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums {
  private albumService = inject(AlbumService);

  loading = true;

  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();

  errorMessage = '';

  constructor() {
    this.albumService.getAlbums()
      .pipe(
        catchError(() => {
          this.errorMessage = 'Failed to load albums.';
          return of([] as Album[]);
        }),
        finalize(() => (this.loading = false))
      )
      .subscribe((albums) => this.albumsSubject.next(albums));
  }

  deleteAlbum(id: number) {
    // оптимистично удаляем из UI сразу
    const current = this.albumsSubject.value;
    this.albumsSubject.next(current.filter(a => a.id !== id));

    this.albumService.deleteAlbum(id).subscribe({
      error: () => {
        // если ошибка — вернём обратно (приятно для UX)
        this.errorMessage = 'Delete failed. Restored album in the list.';
        this.albumsSubject.next(current);
      }
    });
  }
}
