import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

//i can overwrite the seetings defined globally in this instance 
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN INSTANCE FROM TOKEN';

export default instance;

//in order to use it I need to import it in the file where i need it 
//and use it in the same way as the axios object