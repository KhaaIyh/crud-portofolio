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
export interface Skill {
  id_skill?: string;
  nama_skill: string;
  desk_skill: string;
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
const skillApi = {
  getSkill: () => instance.get("/skill"),
  createSkill: (data: { nama_skill: string; desk_skill:string; id_user: string }) =>
    instance.post("/skill/create", data),
  updateSkill: (id_skill: string, data: Skill) =>
    instance.put(`/skill/update/${id_skill}`, data),
  deleteSkill: (id_skill: string) =>
    instance.delete(`/skill/delete/${id_skill}`),

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

export { skillApi };
