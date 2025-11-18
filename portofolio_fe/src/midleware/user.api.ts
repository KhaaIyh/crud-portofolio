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
export interface User {
  id_user?: string;
  email: string;
  no_hp: string;
  nama: string;
  title: string;
  bio: string;
  profile: File | null;
  instagram: string;
  github: string;
  linkedin: string;
}

// Interface respons daftar film
// export interface Movie {
//   page: number;
//   total_pages: number;
//   total_results: number;
//   results: MuvieResult[];
// }

// Method API
const userApi = {
  getUser: (id_user?: string) => {
    if (id_user) {
      return instance.get(`/user`, { params: { where: `id_user:${id_user}` } });
    } else {
      return instance.get("/user");
    }
  },
  createUser: (data: FormData) =>
    instance.post("/user/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  updateUser: (id_user: string, data: User | FormData) =>
    data instanceof FormData
      ? instance.put(`/user/update/${id_user}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
      : instance.put(`/user/update/${id_user}`, data),
  deleteUser: (id_user: string) => instance.delete(`/user/delete/${id_user}`),

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

export { userApi };
