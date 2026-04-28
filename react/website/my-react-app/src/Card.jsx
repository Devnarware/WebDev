

function Card() {

    const profilePic = "https://pbs.twimg.com/profile_images/2017973714718236672/wVGv4IgG_400x400.jpg"

    return (

        <div className="card">

            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Dev Narware</h2>
            <p className="card-text">I am a 2nd year CSE student</p>

        </div>

    );
}

export default Card;