


const VIEW = (commentObj) => {
    return `
    <div class="comment legpad">
            <div class="avater">
                <img src="./assert/img/man-avatar.jpg" alt="" class="user-pic">
                <p class="name">${commentObj.name_value}</p>
            </div>

            <div class="text">
                <p class="comment_text"> ${commentObj.msg_value}</p>
                    <div class="replay-box">
                        <span class="replay">Replay</span>
                        <span class="date">${commentObj.holdDate}</span>
                        <span class="time">${commentObj.currentTime}</span>
                    </div>
            </div>
    </div>
    `
};

export default VIEW;





















