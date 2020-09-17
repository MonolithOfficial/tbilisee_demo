import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './gallery.scss';
import '../../Styles/common.scss'
import PageTitle from '../../Components/PageTitle';
import HeaderBlack from '../../Components/HeaderBlack'
import 'react-image-lightbox/style.css';
import FsLightbox from 'fslightbox-react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayRooms: [],
            arrayRoomsFirst: [],
            offset: 0,
            data: [],
            perPage: 9,
            currentPage: 0,
            photoIndex: 0,
            toggler: false
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://core.tbilisee.ge/api/gallery?group=all`)
            .then(res => {   
                this.setState({arrayRoomsFirst: res.data.image_200})
                let arrayRooms = [];
                this.setState({
                    arrayRooms: arrayRooms
                })
                for(let item of this.state.arrayRoomsFirst){
                    let text = 'https://core.tbilisee.ge/'+item;
                    arrayRooms.push(text)
                }
                let data = res.data.image
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const Tbilisee = 'https://core.tbilisee.ge/';
                const postData = slice.map((pd,index) => <React.Fragment>                     
                            <img className="gallery-img" src={Tbilisee + pd} alt="" key={index} onClick={this.toggler}/>                                              
                </React.Fragment>)
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };
    toggler = () => {
        const currentState = this.state.toggler;
            this.setState({ toggler: !currentState });
    }

    componentDidMount() {
        this.receivedData()
    }
    
    render() {
        const {t} = this.props;
        const Tbilisee = 'https://core.tbilisee.ge/';
        return (
            <div>
                <HeaderBlack t={t}/>
                
                <FsLightbox
                    toggler={this.state.toggler}
                    sources={[
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:24:10.590Zgallery 1.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:24:18.140Zgallery 2.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:24:29.123Zgallery 3.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:24:49.915Zgallery 4.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:24:58.900Zgallery 5.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:25:04.979Zgallery 6.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:25:13.920Zgallery 7.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:25:21.143Zgallery 8.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:25:35.780Zgallery 9.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:25:42.863Zgallery 10.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:25:49.189Zgallery 11.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:25:54.996Zgallery 12.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:26:02.412Zgallery 13.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:26:08.170Zgallery 6.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:26:15.032Zgallery 3.jpg",
                        "https://core.tbilisee.ge/public/images/gallery/2020-08-14T11:26:23.858Zgallery 5.jpg"
                    ]}
/>
                {/* <Lightbox isOpen={this.state.isOpen}/> */}
                <PageTitle title={t("gallery")} style={{marginBottom: "10rem"}}/>
                <div className="gallery container-own" onClick={this.toggler}>
               {this.state.postData}
                </div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={""}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    }
}