import api from "./api";

const timelineService = {
    getTimeline: async () => api.get('/')
}

export default timelineService;