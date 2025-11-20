// movie.api.ts
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
});

// instance.interceptors.request.use((config) => {
//   const token = import.meta.env.VITE_REACT_API_TOKEN;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// Interface hasil film individual
export interface ProjectItem {
  nama_project: string;
  foto_project: File | null;
  desk_project: string;
};

export interface Project {
  id_project?: string;
  nama_project: string;
  desk_project: string;
  foto_project: File | null;
  id_user: string;
}

// Interface respons daftar film
// export interface Movie {
//   page: number;
//   total_pages: number;
//   total_results: number;
//   results: MuvieResult[];
// }

// Method API
const projectApi = {
  getProject: (id_user?: string) => {
    if (id_user) {
      return instance.get(`/project`, {
        params: { where: `id_user:${id_user}` },
      });
    } else {
      return instance.get("/project");
    }
  },
  createProject: (data: FormData) =>
    instance.post("/project/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  updateProject: (id_project: string, data: Project | FormData) =>
    data instanceof FormData
      ? instance.put(`/project/update/${id_project}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      : instance.put(`/project/update/${id_project}`, data),
  deleteProject: (id_project: string) =>
    instance.delete(`/project/delete/${id_project}`),

  //   getMovieDetails: (movieId: number) =>
  //   instance({
  //     method: "GET",
  //     url: `3/movie/${movieId}?language=en-US`,
  //   }),

  //   // Ambil film global saja
  //   getGlobalMovies: () =>
  //     instance({
  //       method: "GET",
  //       url: "3/movie/popular?language=en-US&page=1",
  //     }),

  //   // Ambil film Indonesia saja
  //   getIndonesianMovies: () =>
  //     instance({
  //       method: "GET",
  //       url: "3/discover/movie?language=id-ID&region=ID&sort_by=popularity.desc&with_origin_country=ID&page=1",
  //     }),

  //   // Gabungkan film global + film Indonesia
  //   getPopularMovies: async (): Promise<Movie> => {
  //     try {
  //       const [globalRes, indoRes] = await Promise.all([
  //         movieApi.getGlobalMovies(),
  //         movieApi.getIndonesianMovies(),
  //       ]);

  //       const combinedResults = [
  //         ...(globalRes.data?.results || []),
  //         ...(indoRes.data?.results || []),
  //       ];

  //       return {
  //         page: 1,
  //         total_pages: 1,
  //         total_results: combinedResults.length,
  //         results: combinedResults,
  //       };
  //     } catch (error) {
  //       console.error("Gagal mengambil gabungan film:", error);
  //       throw error;
  //     }
  //   },
};

export { projectApi };
