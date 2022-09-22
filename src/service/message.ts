import api from "./api";

const messageService = {
    postMessage: async (message: any) => api.post('/', message)
}

export default messageService;