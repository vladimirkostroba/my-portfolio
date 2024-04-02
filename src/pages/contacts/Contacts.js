import Container from "../../components/containter/Container";
import ContactsBox from "../../components/contactsBox/ContactsBox";
import SocialList from "../../components/socialList/SocialList";


export default function Contacts(){
    return(
        <main>
            <section>
            <Container>
                <ContactsBox/>
                <SocialList/>
            </Container>
            </section>

             
        </main>
    )

}