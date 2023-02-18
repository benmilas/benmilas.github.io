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
                    bio.innerText = `Giannis Antetokounmpo, also known as the "Greek Freak," is a forward for the Milwaukee Bucks. He was born in Greece and joined the Bucks in 2013 as a 19-year-old. Since then, he has become one of the most dominant players in the NBA, winning back-to-back MVP awards in 2019 and 2020. He led the Bucks to their first NBA championship in 50 years in 2021.`;
                    break;
                // Kareem
                case 1:
                    bio.innerText = `Kareem Abdul-Jabbar is a former center for the Milwaukee Bucks, who played for the team from 1969 to 1975. During his time with the Bucks, Abdul-Jabbar won three MVP awards and led the team to its only NBA championship in 1971. He is widely regarded as one of the greatest basketball players of all time, and his skyhook shot is still one of the most iconic moves in NBA history. He was inducted into the Naismith Memorial Basketball Hall of Fame in 1995.`;
                    break;
                // Oscar Robertson
                case 2:
                    bio.innerText = `Oscar Robertson is a former point guard for the Milwaukee Bucks, who played for the team from 1970 to 1974. He was a 12-time All-Star and the NBA's Rookie of the Year in 1961, and he won an NBA championship with the Bucks in 1971. Robertson is widely regarded as one of the greatest point guards in NBA history, and he was inducted into the Naismith Memorial Basketball Hall of Fame in 1980.`;
                    break;
                // Sidney Moncrief
                case 3:
                    bio.innerText = `Sidney Moncrief is a former shooting guard for the Milwaukee Bucks, who played for the team from 1979 to 1989. He was a five-time All-Star and two-time NBA Defensive Player of the Year, and he helped lead the Bucks to the Eastern Conference Finals in 1983 and 1984. Moncrief is widely regarded as one of the best defensive guards in NBA history. He was inducted into the Naismith Memorial Basketball Hall of Fame in 2019.`;
                    break;
                // Ray Allen
                case 4:
                    bio.innerText = `Ray Allen is a former shooting guard for the Milwaukee Bucks, who played for the team from 1996 to 2003. He was a three-time All-Star with the Bucks and one of the best three-point shooters in NBA history, holding the record for most career three-pointers made until 2011. Allen helped lead the Bucks to the Eastern Conference Finals in 2001. He was inducted into the Naismith Memorial Basketball Hall of Fame in 2018.`;
                    break;
                // George Karl
                case 5:
                    bio.innerText = `George Karl is a former head coach of the Milwaukee Bucks, who coached the team from 1998 to 2003. He led the Bucks to the Eastern Conference Finals in 2001, and he was named NBA Coach of the Year in 2013, when he was coaching the Denver Nuggets. Karl is known for his innovative coaching strategies and his ability to develop young players. He was inducted into the Naismith Memorial Basketball Hall of Fame in 2022.`;
                    break;
                // Mike Budenholzer
                case 6:
                    bio.innerText = `Mike Budenholzer is the current head coach of the Milwaukee Bucks, a position he has held since 2018. He led the team to its first NBA championship in 50 years in 2021, and he was named NBA Coach of the Year in 2015 and 2019. Budenholzer is known for his emphasis on ball movement and team play, and his ability to get the best out of his players.`;
                    break;
                default:
                    bio.innerText = "";
            }
        });
    });

    imageContainer.addEventListener('click', () => {
        imageContainer.style.display = 'none';
    });
}
window.onload = init;