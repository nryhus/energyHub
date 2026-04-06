import {Row} from "react-bootstrap";

interface IProps<T> {
    objects: T[];
    children: (item: T) => React.ReactNode;
}

const CardList = <T,>({objects, children}: IProps<T>) => {
    return (
        <Row className={`d-flex justify-content-around align-items-center`} gap={2}>
            {objects.map((object, index) => (
                <div className="my-2 col-md-4" key={index}>
                    {children(object)}
                </div>
            ))}
        </Row>
    );
};

export {
    CardList
}