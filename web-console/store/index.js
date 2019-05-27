import Vue from 'vue'

export const state = () => ({
    socket: {
        isConnected: false,
        message: '',
        reconnectError: false,
    },
    counter: 0,
    requests: [],
  })

function getRequestTime(timestamp) {
    var requestTime = new Date(timestamp*1000);
    var datetime = requestTime.getDate() + "/" +
        (requestTime.getMonth() + 1) + "/" +
        requestTime.getFullYear() + " @ " +
        requestTime.getHours() + ":" +
        requestTime.getMinutes() + ":" +
        requestTime.getSeconds();
    return datetime;
}

export const mutations = {
    SOCKET_ONOPEN (state, event)  {
    Vue.prototype.$socket = event.currentTarget
    state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event)  {
    state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event)  {
    console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, data)  {
        var r = {
            count: ++state.counter,
            id: data.id,
            unix_time: data.time,
            time: getRequestTime(data.time),
            status: data.response.statusCode, 
            method: data.request.method, 
            path: data.request.path,
            request: data.request,
            response: data.response,
            result: data.result,
        };
        state.requests.unshift(r);
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
    console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
        state.socket.reconnectError = true;
    },
    clear(state) {
        state.requests = []
    },
}