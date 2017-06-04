import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import favoriteCams from '../reducers';

const initialState = {
  cameras: {
    isFetching: false,
    items: [
      {
        uin: 100000634117,
        total_views: 42522,
        views: 1,
        width: 1920,
        camera: '0',
        description: 'Компания \'Смотри сейчас\'  профессионально занимается установкой систем видеонаблюдения. Для того чтобы вы по достоинству могли оценить возможность сервиса облачного видеонаблюдения - мы установили данную онлайн видеокамеру. Приятного просмотра! www.viewnow.ru',
        banned: false,
        online: true,
        free_banner: false,
        public: true,
        link: 'http://www.viewnow.ru',
        height: 1080,
        approved: true,
        camera_name: 'г.Тольятти, перекресток ул.Юбилейной и Ленинского пр-та',
        server: '100-b79582881a461cb08d6e89e2269ffbc5',
        show_on_tv: true,
        embed_logo: 'partner',
        public_archive: false,
      },
    ],
    nextSeed: '',
  },
  favorite: [],
};

export default createStore(favoriteCams, initialState, applyMiddleware(thunk));
