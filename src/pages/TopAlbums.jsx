import React from "react";
import Header from "../components/Header";
import topAlbumsAPI from "../services/topAlbumsAPI";
import { NotFound } from "../styles/pages/Search";
import { ListTop } from "../styles/pages/TopAlbums";
import { Spinner } from "react-bootstrap";

class TopAlbums extends React.Component {
    constructor() {
        super();

        this.state = {
            Loading: false,
            response: [],
        };

    }

    componentDidMount() {
        this.fetchAlbums()
    }

    fetchAlbums = async () => {
        this.setState({ loading: true });
        const response = await topAlbumsAPI();
        this.setState({ loading: false, response });
        console.log(response);
    };

    render() {
        const { loading, response } = this.state;
        return (
            <div>
                <Header />
                <h1 style={{ marginTop: 100 }} className="text-dark fw-bold text-center">Top Albums</h1>
                {loading ? (
                    <div className="d-flex"><Spinner animation="border mx-auto" /></div>
                ) : (
                    response.length > 0 ? (
                        response.map((item, index) =>
                            <ListTop key={index}>
                                <img src={item.artworkUrl100} alt="poster" />
                                <h1>{item.collectionName}</h1>
                                <h2>{item.artistName}</h2>
                            </ListTop>
                        )

                    ) : (
                        <NotFound />
                    )
                )}
            </div>
        )
    }
}

export default TopAlbums;