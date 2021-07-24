import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function DarkComponent() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Dropdown button"
        className="mt-2"
      >
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </DropdownButton>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DarkComponent;
