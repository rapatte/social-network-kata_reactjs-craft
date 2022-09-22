import api from "./api";

const messageService = {
    postMessage: async () => api.post('/')
}

export default messageService;