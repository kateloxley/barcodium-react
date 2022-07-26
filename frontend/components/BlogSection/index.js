import { SectionTitle } from '../../src/styles/components';
import BlogCard from './BlogCard';
import { SectionWrapper } from './BlogElements';

const BlogSection = () => {
    return (
      <>
        <SectionTitle>Наш блог</SectionTitle>
          <SectionWrapper>
            <BlogCard
              title='Где получить и оформить штрих-код на товар официально?'
              text='В данной статье мы разберемся с тем, как и где можно зарегистрировать штрих-коды и как на этом можно сэкономить.'
            />
            <BlogCard
              title='Штрих-коды стран производителей. Код страны 460'
              text='В данной статье мы разберемся с тем, что такое штрих-код страны производителя, какие они бывают. А так же выясним, какой код страны закреплен за Россией.'
            />
          </SectionWrapper>
      </>
    );
}

export default BlogSection;