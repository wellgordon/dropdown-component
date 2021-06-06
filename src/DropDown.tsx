import * as React from 'react'

import styled, { useTheme } from 'styled-components'

const Container = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
`

const Select = styled.datalist`
    height: 2rem;
    width: 10rem;
`

const Input = styled.input`
    height: 2rem;
    width: 10rem;
`

type DropDownProps = {
    arr: Array<any>,
    first: string
}

export default function DropDown({arr, first}: DropDownProps) {

    const sortedArr: Array<any> = arr.sort()

    const [buffer, setBuffer] = React.useState('')
    const [selected, setSelected] = React.useState<number>()

    function handleChange(e: { target: { value: React.SetStateAction<string> } }) {
        setBuffer(e.target.value)
    }

    React.useEffect(() => {
        let len = buffer.length

        for(let i=0; i < arr.length; i++) {
            if(sortedArr[i].substring(0,len) === buffer) {
                setSelected(i)
            }
        }
    }, [buffer])

    return (
        <Container>
            <Input type='text' list='dropdown' onChange={handleChange} />
            <Select id='dropdown'>
                <option>{first}</option>
                {sortedArr.map((item: string, i: number) => {
                    if(i === selected) {
                        return <option selected>{item}</option>
                    } else {
                        return <option>{item}</option>
                    }
                    
                })}
            </Select>         
        </Container>
    )
}