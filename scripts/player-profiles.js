function init() {
    const liElements = document.querySelectorAll('li.clickable');
    const imageContainer = document.getElementById('image-container');
    const buck = document.getElementById('buck');
    const bio = document.getElementById('bio');

    liElements.forEach((li) => {
        li.addEventListener('click', () => {
            const id = li.id;
            buck.src = `../../images/buck${id}.jpg`;
            imageContainer.style.display = 'flex';
            switch (parseInt(id)) {
                // Giannis
                case 0:
                    buck.alt = "Giannis Antetokounmpo";
                    bio.innerHTML = `<p>Giannis Antetokounmpo, also known as the "Greek Freak," is a forward for the Milwaukee Bucks. He was born in Greece and joined the Bucks in 2013 as a 19-year-old. Since then, he has become one of the most dominant players in the NBA, winning back-to-back MVP awards in 2019 and 2020. He led the Bucks to their first NBA championship in 50 years in 2021.</p>
                    <p><small>Image: Giannis Antetokounmpo by Wikimedia Commons at <a
                        href="https://commons.wikimedia.org/wiki/File:Giannis_Antetokounmpo_%2851664127127%29_%28cropped%29.jpg" target="_blank"
                        rel="noopener noreferrer">https://commons.wikimedia.org/wiki/File:Giannis_Antetokounmpo_%2851664127127%29_%28cropped%29.jpg</a>, CC0.</small></p>`;
                    break;
                // Kareem
                case 1:
                    buck.alt = "Kareem Abdul-Jabbar";
                    bio.innerHTML = `<p>Kareem Abdul-Jabbar is a former center for the Milwaukee Bucks, who played for the team from 1969 to 1975. During his time with the Bucks, Abdul-Jabbar won three MVP awards and led the team to its only NBA championship in 1971. He is widely regarded as one of the greatest basketball players of all time, and his skyhook shot is still one of the most iconic moves in NBA history. He was inducted into the Naismith Memorial Basketball Hall of Fame in 1995.
                    <p><small>Image: Kareem Abdul-Jabbar by Getty Images at <a
                        href="https://www.pinterest.com/pin/528961918739369660/" target="_blank"
                        rel="noopener noreferrer">https://www.pinterest.com/pin/528961918739369660/</a>, CC BY-NC-ND.</small></p>`;
                    break;
                // Oscar Robertson
                case 2:
                    buck.alt = "Oscar Robertson";
                    bio.innerHTML = `<p>Oscar Robertson is a former point guard for the Milwaukee Bucks, who played for the team from 1970 to 1974. He was a 12-time All-Star and the NBA's Rookie of the Year in 1961, and he won an NBA championship with the Bucks in 1971. Robertson is widely regarded as one of the greatest point guards in NBA history, and he was inducted into the Naismith Memorial Basketball Hall of Fame in 1980.
                    <p><small>Image: Oscar Robertson by Wikimedia Commons at <a
                        href="https://commons.wikimedia.org/wiki/File:Oscar_Robertson1971.jpg" target="_blank"
                        rel="noopener noreferrer">https://commons.wikimedia.org/wiki/File:Oscar_Robertson1971.jpg</a>, CC0.</small></p>`;
                    break;
                // Sidney Moncrief
                case 3:
                    buck.alt = "Sidney Moncrief";
                    bio.innerHTML = `<p>Sidney Moncrief is a former shooting guard for the Milwaukee Bucks, who played for the team from 1979 to 1989. He was a five-time All-Star and two-time NBA Defensive Player of the Year, and he helped lead the Bucks to the Eastern Conference Finals in 1983 and 1984. Moncrief is widely regarded as one of the best defensive guards in NBA history. He was inducted into the Naismith Memorial Basketball Hall of Fame in 2019.
                    <p><small>Image: Sidney Moncrief by Basketball Wiki at <a
                        href="https://basketball.fandom.com/wiki/Sidney_Moncrief?file=Sidney_Moncrief_Bucks.jpg" target="_blank"
                        rel="noopener noreferrer">https://basketball.fandom.com/wiki/Sidney_Moncrief?file=Sidney_Moncrief_Bucks.jpg</a>, CC-BY-SA.</small></p>`;
                    break;
                // Ray Allen
                case 4:
                    buck.alt = "Ray Allen";
                    bio.innerHTML = `<p>Ray Allen is a former shooting guard for the Milwaukee Bucks, who played for the team from 1996 to 2003. He was a three-time All-Star with the Bucks and one of the best three-point shooters in NBA history, holding the record for most career three-pointers made until 2011. Allen helped lead the Bucks to the Eastern Conference Finals in 2001. He was inducted into the Naismith Memorial Basketball Hall of Fame in 2018.
                    <p><small>Image: Ray Allen by Milwaukee Bucks Twitter at <a
                        href="https://twitter.com/Bucks/status/964941827060088832" target="_blank"
                        rel="noopener noreferrer">https://twitter.com/Bucks/status/964941827060088832</a>, CC BY-NC-ND.</small></p>`;
                    break;
                // George Karl
                case 5:
                    buck.alt = "George Karl";
                    bio.innerHTML = `<p>George Karl is a former head coach of the Milwaukee Bucks, who coached the team from 1998 to 2003. He led the Bucks to the Eastern Conference Finals in 2001, and he was named NBA Coach of the Year in 2013, when he was coaching the Denver Nuggets. Karl is known for his innovative coaching strategies and his ability to develop young players. He was inducted into the Naismith Memorial Basketball Hall of Fame in 2022.
                    <p><small>Image: George Karl by Wikimedia Commons at <a
                        href="https://commons.wikimedia.org/wiki/File:George_Karl.jpg" target="_blank"
                        rel="noopener noreferrer">https://commons.wikimedia.org/wiki/File:George_Karl.jpg</a>, CC BY-SA 2.0.</small></p>`;
                    break;
                // Mike Budenholzer
                case 6:
                    buck.alt = "Mike Budenholzer";
                    bio.innerHTML = `<p>Mike Budenholzer is the current head coach of the Milwaukee Bucks, a position he has held since 2018. He led the team to its first NBA championship in 50 years in 2021, and he was named NBA Coach of the Year in 2015 and 2019. Budenholzer is known for his emphasis on ball movement and team play, and his ability to get the best out of his players.
                    <p><small>Image: Mike Budenholzer by Wikimedia Commons at <a
                        href="https://en.wikipedia.org/wiki/Mike_Budenholzer#/media/File:CMuwGzp.jpg" target="_blank"
                        rel="noopener noreferrer">https://en.wikipedia.org/wiki/Mike_Budenholzer#/media/File:CMuwGzp.jpg</a>, CC BY-SA 4.0.</small></p>`;
                    break;
                default:
                    bio.innerHTML = "";
            }
        });
    });

    imageContainer.addEventListener('click', () => {
        imageContainer.style.display = 'none';
    });
}
window.onload = init;