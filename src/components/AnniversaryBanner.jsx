import { styled } from '../styles'
import selo from '../assets/home-part-1/selo.png'
import facebookIcon from '../assets/icons/facebook-icon.png'
import instagramIcon from '../assets/icons/insta-icon.png'
import youtubeIcon from '../assets/icons/youtube-icon.png'
import { animations } from '../styles/animations/animations'

const BannerWrapper = styled('section', {
  display: 'flex',
  left: 'calc(50% - 1920px/2)',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '40px 348px',
  gap: '32px',
  position: 'absolute',
  width: '1920px',
  height: '200px',
  top: '5173px',
  background: '$accentYellow',
  '@media (max-width: 1520px)': {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px 20px',
    gap: '20px',
    width: '360px',
    height: '448px',
    left: 'calc(50% - 360px/2)',
    top: '5695px',
  },
})

const SeloImage = styled('img', {
  width: '176px',
  height: '116px'
})

const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: '12px',
  width: '1016px',
  height: '120px',
  boxSizing: 'border-box',
  '@media (max-width: 1520px)': {
    padding: '0px 0px 16px',
    gap: '8px',
    width: '320px',
    height: '162px',
    borderBottom: '1px solid $textPrimaryBlue',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const TitleSubtitleWrapper = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingBottom: '16px',
  width: '1016px',
  height: '86px',
  borderBottom: '1px solid $textPrimaryBlue',
  '@media (max-width: 1520px)': {
    borderBottom: 'none',
    width: '320px',
  },
})

const BannerTitle = styled('h2', {
  width: '1016px',
  height: '38px',
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '120%',
  display: 'flex',
  alignItems: 'center',
  color: '$textPrimaryBlue',
  '@media (max-width: 1520px)': {
    width: '320px',
    height: '58px',
    fontSize: '24px',
    lineHeight: '120%',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const SocialSubtitleRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 0,
  width: '1016px',
  height: '32px',
  '@media (max-width: 1520px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    width: '320px',
    height: '80px',
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const Subtitle = styled('p', {
  width: '494px',
  height: '29px',
  fontFamily: '$primary',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '180%',
  color: '$textPrimaryBlue',
  '@media (max-width: 1520px)': {
    marginTop: '5px',
    width: '320px',
    height: '38px',
    fontSize: '16px',
    lineHeight: '120%',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const SocialIcons = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 0,
  gap: '15px',
  width: '126px',
  height: '32px',
  '@media (max-width: 1520px)': {
    flexDirection: 'row',
    marginTop: '10px',
    width: '126px',
    height: '32px',
    padding: 0,
    gap: '15px',
  },
})

const Icon = styled('img', {
  flex: 'none',
  order: 0,
  flexGrow: 0,
  cursor: 'pointer',
  '&:hover': {
    animation: `${animations.scaleUp} 0.2s ease-out forwards`,
  }
})

const FooterLinks = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 0,
  gap: '24px',
  width: '660px',
  maxWidth: '660px',
  height: '22px',
  '@media (max-width: 1520px)': {
    position: 'absolute',
    bottom: '30px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 0,
    gap: '4px',
    width: '320px',
    maxWidth: '660px',
    height: '74px',
    flex: 'none',
    order: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

const FooterText = styled('span', {
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '180%',
  color: '$textNeutralDark',
  cursor: 'pointer',
  height: '22px',
  '@media (max-width: 1520px)': {
    height: '22px',
    flex: 'none',
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
})

export default function AnniversaryBanner() {
  return (
    <BannerWrapper>
      <SeloImage src={selo} alt="Selo 20 anos" />
      <ContentContainer>
        <TitleSubtitleWrapper>
          <BannerTitle>Acompanhe a nossa história.</BannerTitle>
          <SocialSubtitleRow>
            <Subtitle>Siga a gente nas redes sociais e veja o dia a dia dos nossos alunos.</Subtitle>
            <SocialIcons>
              <Icon src={instagramIcon} alt="Instagram" style={{ width: '21px', height: '21px' }} />
              <Icon src={facebookIcon} alt="Facebook" style={{ width: '21px', height: '21px' }} />
              <Icon src={youtubeIcon} alt="YouTube" style={{ width: '25px', height: '17px' }} />
            </SocialIcons>
          </SocialSubtitleRow>
        </TitleSubtitleWrapper>
        <FooterLinks>
          <FooterText>Proteção e Privacidade de Dados</FooterText>
          <FooterText>Política de privacidade</FooterText>
          <FooterText>Programa de Integridade</FooterText>
        </FooterLinks>
      </ContentContainer>
    </BannerWrapper>
  )
}