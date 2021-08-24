import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        links:['Home','Features','Gallary','Testimonials'],
        adults: [],
        kids: [],
        dataKid: [
            { name: '0' },
            { name: '1' },
            { name: '2' },
            { name: '3' },
            { name: '4' },
            { name: '5' },
        ],
        dataAdults: [
            { name: '1' },
            { name: '2' },
            { name: '3' },
            { name: '4' },
            { name: '5' },
        ],
        dateBegin:null,
        dateEnd:null,
        rooms:[
            {
                id: '1',
                name:'Lux: Room',
                price:'$60 night',
                background: '/img/room1.png',
            },
            {
                id: '2',
                name:'Mini Room',
                price:'$70 night',
                background: '/img/room2.png',
            },
            {
                id: '3',
                name:'Stand Room',
                price:'$65 night',
                background: '/img/room3.png',
            },
            {
                id: '4',
                name:'Single Room',
                price:'$55 night',
                background: '/img/room4.png',
            },
            {
                id: '5',
                name:'Elite  Room',
                price:'$65 night',
                background: '/img/room5.png',
            },
        ],
        reviews:[
            {
                id:'1',
                img: require('../image/man1.png'),
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
                name: 'David lee',
                instagram: 'davidlee@',
            },
            {
                id:'2',
                img: require('../image/man2.png'),
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
                name: 'Ravi shankor',
                instagram: 'ravishankor@',
            },
            {
                id:'3',
                img: require('../image/man1.png'),
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
                name: 'Thomas lew',
                instagram: 'thomaslew@',
            },
            {
                id:'4',
                img: require('../image/man1.png'),
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
                name: 'David lee',
                instagram: 'davidlee@',
            },
            {
                id:'5',
                img: require('../image/man2.png'),
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
                name: 'Ravi shankor',
                instagram: 'ravishankor@',
            },
            {
                id:'6',
                img: require('../image/man1.png'),
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
                name: 'Thomas lew',
                instagram: 'thomaslew@',
            },
        ],
    },
    getters:{
        baseRoom(state){
            return state.rooms
        },
        reviews(state){
            return state.reviews
        }
    },
    mutations:{
        choiceKids(state,payload){
            state.kids = payload
        },
        choiceAdults(state,payload){
            state.adults = payload
        },
        dateBegin(state, payload){
            state.dateBegin = payload
        },
        dateEnd(state, payload){
            state.dateEnd = payload
        },
    }
})