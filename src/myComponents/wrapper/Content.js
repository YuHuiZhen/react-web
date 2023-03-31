export default function Content({Content}){
  return (
    <div className="content-wrapper"> 
    This is Content
    {Content()}
    </div>
  )
}