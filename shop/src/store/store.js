import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        links:['Home','Features','Gallary','Testimonials'],
        choiceAmountAdults: [],
        choiceAmountChildren: [],
        amountChildren: [
            { name: '0' },
            { name: '1' },
            { name: '2' },
            { name: '3' },
            { name: '4' },
            { name: '5' },
        ],
        amountAdults: [
            { name: '1' },
            { name: '2' },
            { name: '3' },
            { name: '4' },
            { name: '5' },
        ],
        bookingDateBegin:null,
        bookingDateEnd:null,
        listRoom:[
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
        listReviews:[
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
        getListRoom(state){
            return state.listRoom
        },
        getListReviews(state){
            return state.listReviews
        },
        getListLinks(state){
            return state.links
        },
        getBookingDateEnd(state){
            return state.bookingDateEnd
        },
        getBookingDateBegin(state){
            return state.bookingDateBegin
        },
        getListAmountChildren(state){
            return state.amountChildren
        },
        getListAmountAdult(state){
            return state.amountAdults
        }

    },
    actions:{
        choiceAmountAdults(context,value){
            context.commit('choiceAmountAdults',value)
        },
        choiceAmountChildren(context,value){
            context.commit('choiceAmountChildren',value)
        },
        bookingDateEnd(context,value){
            context.commit('bookingDateEnd',value)
        },
        bookingDateBegin(context,value){
            context.commit('bookingDateBegin',value)
        },

    },
    mutations:{
        choiceAmountChildren(state,payload){
            state.choiceAmountChildren = payload
        },
        choiceAmountAdults(state,payload){
            state.choiceAmountAdults = payload
        },
        bookingDateEnd(state, payload){
            state.bookingDateEnd = payload
        },
        bookingDateBegin(state, payload){
            state.bookingDateBegin = payload
        },

    },
})