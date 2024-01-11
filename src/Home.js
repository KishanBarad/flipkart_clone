import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import { Container, Row } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './feature/Cartslice';
import axios from 'axios';

function Home() {
    const [index, setIndex] = useState(0);
    const [post, setpost] = useState()
    const dispatch = useDispatch()


    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const options = {

        nav: true,
        rewind: true,
        autoplay: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    };

    useEffect(() => {
        FetchApiData()
    }, [])

    const FetchApiData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                const dataWithQuantity = response.data.map(item => ({ ...item, quantity: 1 }));
                setpost(dataWithQuantity)    
            })
    }

    const splitstring = (title, no) => {
        if (title.length > 0) {
            title = title.substring(0, no)
            title += "..."

            return title;
        }
        else {
            return title;
        }
    }


    if (!post) return null

    return (
        <>
            <div className='container-fluid firstcarousel'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img src='images\slid1.webp'/>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='images\slid2.webp' />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='images\slid3.webp' />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='images\slid4.webp' />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <section className='mid-head'>
                    <Container>
                        <div className='row row-cols-lg-5'>
                            <div className='det'>
                                <img src="images\22fddf3c7da4c4f4.webp" />
                                <h5 >Mobile</h5>
                            </div>
                            <div className='det fash'>
                                <img src="images\0d75b34f7d8fbcb3.webp" />
                                <h5 >Fashion</h5>
                            </div>
                            <div className='det'>
                                <img src="images\69c6589653afdb9a.webp" />
                                <h5 >Electronics</h5>
                            </div>
                            <div className='det '>
                                <img src="images\ab7e2b022a4587dd.webp" />
                                <h5 >Furniture</h5>
                            </div>
                            <div className='det'>
                                <img src="images\dff3f7adcf3a90c6.webp" />
                                <h5 >Toys</h5>
                            </div>


                        </div>

                    </Container>
                </section>
                <section className='third'>
                    <div className='row th-flex'>
                        <div className='r-t-side col-lg-8 '>
                            <h3>best of Electronics</h3>
                            <div className='row '>

                                <OwlCarousel options={options}  >
                                    {
                                        post.map((item) => {
                                            if (item.category == "electronics") {
                                                return <div className='cards' >
                                                    <div className='box'>
                                                        <img src={item.image} alt="The Last of us" />
                                                        <h3>{item.category}</h3>
                                                        <p>RS. {item.price}</p>
                                                    </div>
                                                </div>
                                            }

                                        }
                                        )
                                    }


                                </OwlCarousel>
                            </div>

                        </div>
                        <div className='col-lg-3 plane-side'>
                            <img src='images\plane.webp' />
                        </div>
                    </div>
                </section>
                <section className='fourth'>
                    <div>
                        <h1>product in this site</h1>
                        <div className='row row-cols-lg-5'>

                            {
                                post.map((item) =>
                                    <div className='product'>
                                            <div className='boxes'>
                                                <img src={item.image} />
                                                <h3>{item.category}</h3>
                                                <p>{splitstring(item.title, 20)}</p>
                                                <p>RS. {item.price}</p>
                                                <button onClick={() => dispatch(addToCart(item))}> ADD TO CART</button>
                                            </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;