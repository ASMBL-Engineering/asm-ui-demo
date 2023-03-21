import { useState } from 'react';
import video from '../assets/video.mp4';
import poster from '../assets/poster.jpg';
import largeImage from '../assets/image.jpg';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import { ReactComponent as CameraIcon } from '../assets/camera.svg';
import {
  Divider,
  Button,
  Image,
  Flex,
  Text,
  ProgressiveImage,
  Heading,
  Video,
  Container,
  TwoColumnContainer,
  ThreeColumnContainer,
  Input,
  Checkbox,
  CurrencyInput,
  FileUpload,
  InputWrapper,
  PhoneNumberInput,
  RadioButton,
  RadioButtonGroup,
  SearchInput,
  TimePicker,
  TimeRange,
  DatePicker,
  DateRange,
  DateRangeSingleCalendar,
  FormattedNumberInput,
  Label,
  Iframe,
  Spinner,
  StarRating,
  Alert,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  Icon,
  IconLabelPair,
  Modal,
  Select
} from '@assemble-inc/core';

const Core = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container maxWidth="1224px">
      <div style={{ marginTop: '4rem' }}>
        <Heading element="h3" fontStyle="bold italic">
          Typography Elements
        </Heading>
      </div>
      <Divider />
      <div className="p-48">
        <Heading element="h6" fontStyle="bold italic">
          Headings
        </Heading>
        <TwoColumnContainer alignment="flex-start">
          <div>
            <Heading>{`<Heading element='h1'>`}</Heading>
            <Heading element="h2">{`<Heading element='h2'>`}</Heading>
            <Heading element="h3">{`<Heading element='h3'>`}</Heading>
          </div>
          <div>
            <Heading element="h4">{`<Heading element='h4'>`}</Heading>
            <Heading element="h5">{`<Heading element='h5'>`}</Heading>
            <Heading element="h6">{`<Heading element='h6'>`}</Heading>
          </div>
        </TwoColumnContainer>
      </div>
      <Heading element="h6" fontStyle="bold italic">
        Text
      </Heading>
      <Text style={{ color: 'red' }}>Text</Text>

      <Text size="small">Here is some small text.</Text>
      <Text>Here is some text.</Text>
      <Text size="large">Here is some large text.</Text>

      <Text>
        Here is some {`<Text />`} containing important information about the component{' '}
        <Text fontStyle="italic" element="span">
          (this part is a span ({`<Text element='span' fontStyle='italic' />`}))
        </Text>
        .
      </Text>
      <div style={{ marginTop: '2rem' }}>
        <Flex>
          <Flex.Column>
            <Text element="code">
              {`const function = () => {
        return ('Preformatted code block');
      }`}
            </Text>
          </Flex.Column>
          <Flex.Column>
            <Text element="pre">
              {`Here is
            some
            preformatted text!`}
            </Text>
          </Flex.Column>
        </Flex>
      </div>
      <div style={{ marginTop: '4rem' }}>
        <Heading element="h3" fontStyle="bold italic">
          Media Elements
        </Heading>
      </div>
      <Divider />
      <Heading element="h6" fontStyle="bold italic">
        Images
      </Heading>
      <Flex justify="center">
        <Image caption="Look at this tree" src={largeImage} className="App-logo" alt="logo" />
        <ProgressiveImage
          placeholder="https://images.unsplash.com/photo-1602546403354-dfc99018fc4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxVnNqWXB3OThRQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          src="https://images.unsplash.com/photo-1602546403354-dfc99018fc4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2173&q=80"
          className="App-logo"
          style={{ marginBottom: '2rem' }}
          alt="logo"
          caption="Now look at it again (this one is progressively loaded)."
        />
      </Flex>
      <Heading element="h6" fontStyle="bold italic">
        Icons
      </Heading>
      <Flex alignment="center" style={{ marginBottom: '40px' }}>
        <Icon size="mini" color="red">
          <CameraIcon />
        </Icon>
        <Icon size="tiny" color="orange">
          <CameraIcon />
        </Icon>
        <Icon size="small" color="#b2b200">
          <CameraIcon />
        </Icon>
        <Icon rotate={30} color="green">
          <CameraIcon />
        </Icon>
        <Icon size="large" color="blue">
          <CameraIcon />
        </Icon>
        <Icon size="big" color="indigo">
          <CameraIcon />
        </Icon>
        <Icon size="huge" color="violet">
          <CameraIcon />
        </Icon>
        <Icon size="massive" color="black">
          <CameraIcon />
        </Icon>
      </Flex>
      <IconLabelPair image={poster} label="Here is an image with text" />
      <IconLabelPair icon={<CameraIcon />} iconSize="small" label="Here is an icon with text" />
      <Icon name="close" />
      <div style={{ marginTop: '4rem' }}>
        <Heading element="h6" fontStyle="bold italic">
          Video
        </Heading>
      </div>
      <Video poster={poster} sources={[{ src: video, type: 'video/mp4' }]} />
      <div style={{ marginTop: '4rem' }}>
        <Heading element="h3" fontStyle="bold italic">
          Form Elements
        </Heading>
      </div>
      <Divider />
      <Heading element="h6" fontStyle="bold italic">
        Buttons
      </Heading>
      <ThreeColumnContainer alignment="flex-start">
        <Button href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={{ marginBottom: '20px' }}>
          Learn React
        </Button>
        <Button
          element="a"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: '20px' }}
          primary
        >
          Learn React
        </Button>
        <Button
          basic
          element="a"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: '20px' }}
        >
          Learn React
        </Button>
      </ThreeColumnContainer>
      <Heading element="h6" fontStyle="bold italic">
        Inputs
      </Heading>
      <TwoColumnContainer alignment="flex-start">
        <div>
          <Input
            id="text"
            value=""
            onChange={() => {}}
            type="text"
            label="Text Input"
            style={{ marginBottom: '20px' }}
          />
          <Input id="url" value="" type="url" onChange={() => {}} label="Url Input" style={{ marginBottom: '20px' }} />
          <Input
            id="time"
            value=""
            onChange={() => {}}
            type="time"
            label="Time Input"
            style={{ marginBottom: '20px' }}
          />
          <Input
            id="tel"
            value=""
            onChange={() => {}}
            type="tel"
            label="Telephone Input"
            style={{ marginBottom: '20px' }}
          />
          <Input
            id="search"
            value=""
            onChange={() => {}}
            type="search"
            label="Search Input"
            style={{ marginBottom: '20px' }}
          />
          <SearchInput id="search2" onChange={() => {}} label="Search" style={{ marginBottom: '20px' }} value="" />
          <Input
            id="range"
            value=""
            onChange={() => {}}
            type="range"
            label="Range Input"
            style={{ marginBottom: '20px' }}
          />
          <Input
            id="password"
            value=""
            onChange={() => {}}
            type="password"
            label="Password Input"
            style={{ marginBottom: '20px' }}
          />
        </div>
        <div>
          <Input
            id="num"
            onChange={() => {}}
            value=""
            type="number"
            label="Number Input"
            style={{ marginBottom: '20px' }}
          />
          <Input
            id="email"
            onChange={() => {}}
            value=""
            type="email"
            label="Email Input"
            style={{ marginBottom: '20px' }}
          />
          <Input
            id="month"
            onChange={() => {}}
            value=""
            type="month"
            label="Month Input"
            style={{ marginBottom: '20px' }}
          />
          <Input
            id="week"
            onChange={() => {}}
            value=""
            type="week"
            label="Week Input"
            style={{ marginBottom: '20px' }}
          />
          <Input
            id="date"
            onChange={() => {}}
            value=""
            type="date"
            label="Date Input"
            style={{ marginBottom: '20px' }}
          />
          <Input
            id="datetime"
            onChange={() => {}}
            value=""
            type="datetime-local"
            label="Date Time Input"
            style={{ marginBottom: '20px' }}
          />
          <Input
            id="color"
            onChange={() => {}}
            value=""
            type="color"
            label="Color Input"
            style={{ marginBottom: '20px' }}
          />
          <Select
            id="select"
            label="Select Input"
            options={[
              { value: 1, label: 'One' },
              { value: 2, label: 'Two' },
              { value: 3, label: 'Three' }
            ]}
            onChange={() => {}}
            selectedOption="One"
          />
        </div>
      </TwoColumnContainer>
      <TwoColumnContainer alignment="flex-start">
        <div>
          <TimePicker id="" label="Time Input" style={{ marginBottom: '20px' }} />
          <TimeRange
            timeStartId="s"
            timeEndId="e"
            timeStartLabel="sad"
            timeEndLabel="sad"
            style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}
          />
          <DatePicker id="date-p" label="Date Picker" style={{ marginBottom: '20px' }} />
          <Flex>
            <DateRange
              dateStartId="start"
              dateEndId="end"
              dateStartLabel="Date Range Start"
              dateEndLabel="Date Range End"
              style={{ marginBottom: '20px' }}
            />
          </Flex>
          <DateRangeSingleCalendar id="datecal" label="Date Range Single Cal" style={{ marginBottom: '20px' }} />
          <DateRangeSingleCalendar
            id="datecalin"
            label="Date Range Single Cal Inline"
            inline
            style={{ marginBottom: '20px' }}
          />
        </div>
        <div>
          <FormattedNumberInput
            id="formnum"
            onChange={() => {}}
            label="Formatted Number Input"
            initialValue=""
            style={{ marginBottom: '20px' }}
          />
          <CurrencyInput id="curr" label="Currency Input" style={{ marginBottom: '20px' }} />
          <Checkbox id="check" value="" label="Checkbox" style={{ marginBottom: '20px' }} />
          <div style={{ marginBottom: '20px' }}>
            <FileUpload id="imgup" endpointUrl="" />
          </div>
          <InputWrapper
            htmlFor="custom-input"
            label="Input Wrapper (for custom inputs that adhere to the same style guidelines)"
            style={{ marginBottom: '20px' }}
          >
            <input id="custom-input" />
          </InputWrapper>
          <Label htmlFor="input" style={{ marginBottom: '20px' }}>
            Label without an attached Input
          </Label>
          <PhoneNumberInput
            id="phone"
            value=""
            onChange={() => {}}
            label="Phone Number Input"
            style={{ marginBottom: '20px' }}
          />
          <RadioButton
            id=""
            checked
            value=""
            onChange={() => {}}
            label="Radio Button Input"
            style={{ marginBottom: '20px' }}
          />
          <RadioButtonGroup
            id="radio-group"
            onChange={() => {}}
            selectedRadio=""
            options={[
              { id: 'string', value: 'string', label: 'Radio!' },
              { id: 'string', value: 'string', label: 'Another Radio!' }
            ]}
            legend="Radio Button Group"
            style={{ marginBottom: '20px' }}
          />
        </div>
      </TwoColumnContainer>
      <div style={{ marginTop: '4rem' }}>
        <Heading element="h3" fontStyle="bold italic">
          Table Element
        </Heading>
        <Divider />
        <Table style={{ marginBottom: '4rem' }}>
          <TableHeader
            columns={[
              { title: 'Column 1', sortProperty: 'col1' },
              { title: 'Column 2', sortProperty: 'col2' },
              { title: 'Column 3', sortProperty: 'col3' },
              { title: 'Column 4', sortProperty: 'col4' }
            ]}
          />
          <TableBody
            data={[
              [
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' }
              ],
              [
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' }
              ],
              [
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' }
              ],
              [
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' }
              ],
              [
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' }
              ],
              [
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' },
                { name: 'Col Data', value: 'Column Data' }
              ]
            ]}
          />
          <TableFooter
            columns={[
              { name: 'Footer Column 1', value: 'Col 1' },
              { name: 'Footer Column 2', value: 'Col 2' },
              { name: 'Footer Column 3', value: 'Col 3' },
              { name: 'Footer Column 4', value: 'Col 4' }
            ]}
          />
        </Table>
      </div>
      <Heading element="h3" fontStyle="bold italic">
        Misc Elements
      </Heading>
      <Divider />
      <Container maxWidth="900px">
        <Button style={{ marginBottom: '2rem' }} onClick={() => setModalOpen(true)}>
          Click to open a modal
        </Button>
        <Modal
          ariaModalLabel=""
          closeButtonIconColor="white"
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          closeButtonIcon={<CloseIcon />}
        >
          <Heading>Modal</Heading>
          <Text>Modal content goes here</Text>
        </Modal>
        <Heading element="h6" fontStyle="bold italic">
          Alerts
        </Heading>
        <Alert
          style={{ marginBottom: '1rem' }}
          alert={{ type: 'warning', active: true, message: "I'm that alert named Luda, ALERT ALERT." }}
          handleClose={() => {}}
          closeIcon={<CloseIcon />}
        />
        <Alert
          style={{ marginBottom: '1rem' }}
          alert={{ type: 'success', active: true, message: "I'm that alert named Luda, ALERT ALERT." }}
        />
        <Alert
          style={{ marginBottom: '1rem' }}
          alert={{ type: 'error', active: true, message: "I'm that alert named Luda, ALERT ALERT." }}
        />
        <Alert
          style={{ marginBottom: '1rem' }}
          alert={{ type: 'info', active: true, message: "I'm that alert named Luda, ALERT ALERT." }}
        />
      </Container>
      <Container maxWidth="900px" style={{ marginBottom: '40px' }}>
        <Flex alignment="center" justify="center" style={{ height: '200px' }}>
          <Flex.Column>
            <Heading element="h6" fontStyle="bold italic">
              Loading Spinner
            </Heading>
            <Spinner />
          </Flex.Column>
          <Flex.Column>
            <Heading element="h6" fontStyle="bold italic">
              Star Rating
            </Heading>
            <StarRating starCount={5} filledStarCount={5.45} />
            <StarRating starCount={10} filledStarCount={3.675} />
          </Flex.Column>
        </Flex>
      </Container>
      <Container maxWidth="900px" style={{ marginBottom: '2rem' }}>
        <Heading element="h6" fontStyle="bold italic">
          Iframe
        </Heading>
        <Iframe
          style={{ border: '1px solid #333' }}
          title="Assemble Inc."
          src="https://assembleinc.com"
          height="800px"
        />
      </Container>
    </Container>
  );
};

export default Core;
