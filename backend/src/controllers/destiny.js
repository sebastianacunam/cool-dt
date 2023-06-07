import Destiny from "../models/destiny.js"

export const createDestiny = async (req, res, next) => {
  const body = req.body;
  try {
    const destiny = await new Destiny(body);
    await destiny.save();
    res.send({ data: destiny });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const destinies = async (req, res, next) => {
  const body = req.body;
  try {
    const destinies = await Destiny.find({ body });
    res.send({ data: destinies });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const deleteDestiny = async (req, res) => {
  const id = req.params.id
  try {
    const char = await Destiny.findOneAndDelete({_id:id})
    res.json({ msg:"Eliminado exitosamente!",char })
  } catch (error) {
    res.status(404).send({error:"Destiny is not found"})
  }
}
    
export const updatedDestiny = async (req, res, next) => {
  const data = req.body   
  const id = req.params.id
  
  try {
    const Chars = await Destiny.findByIdAndUpdate(id)
    Object.assign(Chars,data)
    Chars.save()
    res.send({data:Chars})
  } catch (error) {
    res.status(404).send({error:"chars is not found"})
  }
}

export const findDestiny = async (req, res, next) => {
  const id = req.params.id;
  try {
    const destinyId = await  Destiny.findById(id)
    res.send({data: destinyId})
  } catch (error) {
    res.status(404).json({ msg: error.message })
  }
}







