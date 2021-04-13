import React from "react";

const Profile = () => {
	return (
		<div className="content">
			<div className="wallpaper">
				<img
					src="https://images.wallpaperscraft.ru/image/minimalizm_geometricheskij_pejzazh_124072_300x168.jpg"
					alt=""
				/>
			</div>
			<div className="user-card">
				<div className="user-photo">
					<img src="https://img.icons8.com/bubbles/2x/user-male.png" alt="" />
				</div>
				<div className="user-info">
					<h2>My Name</h2>
					<ul>
						<li>Date of birth:19.12.1994</li>
						<li>City: Shostka</li>
						<li>Education: Shostka Institute</li>
						<li>Website: my.website.com</li>
					</ul>
				</div>
			</div>
			<div className="myPosts">
				<h2>My Posts</h2>
				<div className="inputArea">
					<input type="textarea" placeholder="What's new ?" />
					<button type="submit">Publish</button>
				</div>
			</div>
			<div className="postArea">
				<img src="https://img.icons8.com/bubbles/2x/user-male.png" alt="" />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut officiis
					eum in earum non natus recusandae impedit maiores incidunt eos!
				</p>
			</div>
		</div>
	);
};
export default Profile;
