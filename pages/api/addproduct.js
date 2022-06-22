import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res) => {
    if(req.method == 'POST'){
        for(let i=0;i<req.body.length;i++){
            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                demographic: req.body[i].demographic,
                published: req.body[i].published,
                status: req.body[i].status,
                rating: req.body[i].rating,
                genre: req.body[i].genre,
                bgimg: req.body[i].bgimg,
                lang: req.body[i].lang,
                vol: req.body[i].vol,
                price: req.body[i].price,
                AvailableQty: req.body[i].AvailableQty,
            }) 
            await p.save()
        }
        res.status(200).json({success: "success"})
    }else{
        res.status(400).json({error: "This method is not allowed"})
    }
}

export default connectDb(handler);