import { FormattedMessage } from "react-intl";
import { Carousel, Card } from "./AppleCardCarousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full ">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: <FormattedMessage id="categoryWebApp" defaultMessage="Web App" />,
    title: (
      <FormattedMessage
        id="titleEnglishLearning"
        defaultMessage="For learning English"
      />
    ),
    src: "/img/enligsh-tchai-presentation.png",
    link: "https://may-english-tchai.vercel.app/",
  },
  {
    category: <FormattedMessage id="categoryWebApp" defaultMessage="Web App" />,
    title: (
      <FormattedMessage
        id="titleDrivingSchool"
        defaultMessage="For Driving School Center"
      />
    ),
    src: "/img/freedriving-presentation.png",
    link: "/",
  },
  {
    category: <FormattedMessage id="categoryWebApp" defaultMessage="Web App" />,
    title: (
      <FormattedMessage id="titleBarber" defaultMessage="For Barber Business" />
    ),
    src: "/img/odb-presentation.svg",
    link: "/",
  },
  {
    category: <FormattedMessage id="categoryWebApp" defaultMessage="Web App" />,
    title: <FormattedMessage id="titleCapsuleRH" defaultMessage="Capsule RH" />,
    src: "/img/capsulerh-presentation.svg",
    link: "/",
  },
  {
    category: <FormattedMessage id="categoryGame" defaultMessage="Game" />,
    title: (
      <FormattedMessage id="titleTicTacToe" defaultMessage="Tic Tac Toe" />
    ),
    src: "/img/tictactoe-presentation.svg",
    link: "/",
  },
];
