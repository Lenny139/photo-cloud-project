import { Media, TipoMedia } from '../../../domain/models/media';

export interface IMediaRepository {
  guardar(media: Media): Promise<void>;
  buscarPorId(id: string): Promise<Media | null>;
  buscarPorHash(hash: string): Promise<Media | null>;
  eliminar(id: string): Promise<void>;
  listarTodos(): Promise<Media[]>; // 👈 Añade esto

  // Lista únicamente los medios de un tipo concreto (IMAGEN o VIDEO)
  listarPorTipo(tipo: TipoMedia): Promise<Media[]>;
}