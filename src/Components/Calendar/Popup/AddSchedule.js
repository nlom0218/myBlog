import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import PopupContainer from '../../Shared/PopupContainer';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md"
import { ImQuestion } from "react-icons/im"
import { BsCheckLg, BsFillPencilFill } from "react-icons/bs"
import { CgNotes } from "react-icons/cg"
import TextareaAutosize from 'react-textarea-autosize';
import { AiOutlineBgColors } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";

const Container = styled.div`
  display: grid;
  row-gap: 20px;
  row-gap: 1.25rem;
`

const Title = styled.div`
  justify-self: flex-end;
  font-size: 1.25em;
  font-size: 1.25rem;
`

const FormContainer = styled.form`
  display: grid;
  row-gap: 20px;
  row-gap: 1.25rem;
  textarea {
    all: unset;
    min-height: 100%;
    max-height: 100%;
    width: 100%;
    resize: none;
    padding: 15px 20px;
    padding: 0.9375rem 1.25rem;
    box-sizing: border-box;
    border-radius: 5px;
    border-radius: 0.3125rem;
    border: ${props => props.isEdit && `${props.theme.fontColor} 1px solid`};
    background-color: ${props => props.theme.originBgColor};
    line-height: 160%;
    ::placeholder {
    color: ${props => props.theme.fontColor};
    opacity: 0.6;
    transition: color 1s ease, opacity 1s ease;
}
}
`

const InputLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  column-gap: 1.25rem;
`

const Icon = styled.div`
  padding: ${props => props.notPaddingTop ? "0px" : "15px"} 15px;
  padding: ${props => props.notPaddingTop ? "0px" : "0.9375rem"} 0.9375rem;
  font-size: 1.25em;
  font-size: 1.25rem;
  svg {
    display: flex;
  }
`

const Input = styled.input`
  width: 100%;
  background-color: ${props => props.theme.originBgColor};
  padding: 15px 20px;
  padding: 0.9375rem 1.25rem;
  border-radius: 5px;
  border-radius: 0.3125rem;
  ::placeholder {
    color: ${props => props.theme.fontColor};
    opacity: 0.6;
    transition: color 1s ease, opacity 1s ease;
  }
`

const ColorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 30px 30px;
  grid-template-rows: 1.875rem 1.875rem;
  row-gap: 5px;
  row-gap: 0.3125rem;
  column-gap: 5px;
  column-gap: 0.3125rem;
  .delete_color {
    background-color: ${props => props.theme.blurColor};
  }
`

const ColorItem = styled.div`
  background-color: ${props => props.color};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-radius: 0.3125rem;
`

const DateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 20px;
  column-gap: 1.25rem;
  .start_date,
  .end_date {
    padding: 15px 20px;
    padding: 0.9375rem 1.25rem;
    background-color: ${props => props.theme.originBgColor};
    text-align: center;
    border-radius: 20px;
    border-radius: 1.25rem;
  }
`

const CheckBox = styled.div`
  svg {
    display: flex;
  }
`

const RegisterTodo = styled.div`
  justify-self: flex-start;
  padding: 15px 0px;
  padding: 0.9375rem 0rem;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 10px;
  column-gap: 0.625rem;
  cursor: pointer;
`

const SubmitInput = styled.input`
  background-color: ${props => props.theme.btnBgColor};
  color: ${props => props.theme.bgColor};
  padding: 10px;
  padding: 0.625rem;
  border-radius: 5px;
  border-radius: 0.3125rem;
  text-align: center;
  cursor: pointer;
`

const AddSchedule = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(undefined);
  const [color, setColor] = useState(undefined)
  const [isRegisterTodo, setIsRegisterTodo] = useState(false)
  const bgColorArr = [
    "#F44336", "#E91E62", "#9C27B0", "#673AB6", "#3F50B5", "#2096F3",
    "#00A8F4", "#00BCD4", "#009688", "#4CAF4F", "#8BC24A", "#CDDC39",
    "#FFEB3A", "#FFC007", "#FF9800", "#FF5721", "#795548"
  ]
  const { register, handleSubmit } = useForm({
    mode: "onChange"
  })
  return (<PopupContainer>
    <Container>
      <Title>일정등록</Title>
      <FormContainer>
        <InputLayout>
          <Icon><BsFillPencilFill /></Icon>
          <Input
            {...register("title")}
            type="text"
            placeholder="제목을 입력하세요."
          />
        </InputLayout>
        <InputLayout>
          <Icon><CgNotes /></Icon>
          <TextareaAutosize
            {...register("detail")}
            minRows={5}
            maxRows={5}
            placeholder="세부내용을 입력하세요."
          />
        </InputLayout>
        <InputLayout>
          <Icon><BsCalendarDate /></Icon>
          <DateContainer>
            <div className="start_date">
              <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                todayButton="오늘"
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                locale={ko}
              />
            </div>
            <div>~</div>
            <div className="end_date">
              <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                locale={ko}
                placeholderText="종료일 설정"
              />
            </div>
          </DateContainer>
        </InputLayout>
        <InputLayout>
          <Icon notPaddingTop={true}><AiOutlineBgColors /></Icon>
          <ColorContainer>
            {bgColorArr.map((item, index) => {
              return <ColorItem key={index} color={item} onClick={() => setColor(item)}>
                {color === item && <CheckBox><BsCheckLg /></CheckBox>}
              </ColorItem>
            })}
            <ColorItem className="delete_color" onClick={() => setColor(undefined)}>
              삭제
            </ColorItem>
          </ColorContainer>
        </InputLayout>
        <InputLayout>
          <Icon><ImQuestion /></Icon>
          <RegisterTodo onClick={() => setIsRegisterTodo(prev => !prev)}>
            {isRegisterTodo ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
            <div>할 일 목록에 등록</div>
          </RegisterTodo>
        </InputLayout>
        <SubmitInput
          type="submit"
          value="등록하기"
        />
      </FormContainer>
    </Container>
  </PopupContainer>);
}

export default AddSchedule;