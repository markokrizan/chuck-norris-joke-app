import axios from 'axios';


//https://api.chucknorris.io/jokes/categories
//https://api.chucknorris.io/jokes/random?category={category}

class JokeService{

    static async getCategories(){
        const {data} = await axios.get('https://api.chucknorris.io/jokes/categories');
        return data;
    }

    static async getJoke(categoryName){
        const {data} = await axios.get(`https://api.chucknorris.io/jokes/random?category${categoryName}`);
        return data;
    }


}

export default JokeService;