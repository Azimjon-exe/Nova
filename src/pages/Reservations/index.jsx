import { Button, Card, Dialog, Flex, Text, TextField } from "@radix-ui/themes";

const Reservations = () => {
  return (
    <>
      <div className="flex justify-between align-middle px-20 mt-5">
        <p className="text-2xl font-bold">Reservations</p>
        <div className="flex justify-between w-[30%]">
          <div className="w-[80%]">
            <TextField.Input placeholder="Search the docs…" />
          </div>
          <Button>Search</Button>
        </div>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>Add Reservations</Button>
          </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Add Reservations</Dialog.Title>

            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Name
                </Text>
                <TextField.Input placeholder="Enter your full name" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Topic
                </Text>
                <TextField.Input placeholder="Topic" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Date
                </Text>
                <TextField.Input type="date" placeholder="Date" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Place
                </Text>
                <TextField.Input placeholder="Place" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Number of seats
                </Text>
                <TextField.Input placeholder="Number of seats" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Ticket price
                </Text>
                <TextField.Input placeholder="Ticket price" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Currency
                </Text>
                <TextField.Input placeholder="Currency" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Thumbnail
                </Text>
                <TextField.Input placeholder="Thumbnail" />
              </label>
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  Description
                </Text>
                <TextField.Input placeholder="Description" />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button color="red">Cancel</Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button>Add</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </div>
      <div className="mt-5 px-20 flex flex-wrap justify-between">
        <div className="w-[22%]">
          <Card>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Name:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Topic:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Date:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Place:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Number of seats:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Ticket price:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Currency:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Host:</span>
              <span> 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Thumbnail:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Description:</span>
              <span> Reservations 1</span>
            </div>
            <div className=" mt-3">
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button size={"1"}>Edit Reservations</Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                  <Dialog.Title>Edit Reservations</Dialog.Title>

                  <Flex direction="column" gap="3">
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Name
                      </Text>
                      <TextField.Input placeholder="Enter your full name" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Topic
                      </Text>
                      <TextField.Input placeholder="Topic" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Date
                      </Text>
                      <TextField.Input type="date" placeholder="Date" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Place
                      </Text>
                      <TextField.Input placeholder="Place" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Number of seats
                      </Text>
                      <TextField.Input placeholder="Number of seats" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Ticket price
                      </Text>
                      <TextField.Input placeholder="Ticket price" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Currency
                      </Text>
                      <TextField.Input placeholder="Currency" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Thumbnail
                      </Text>
                      <TextField.Input placeholder="Thumbnail" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Description
                      </Text>
                      <TextField.Input placeholder="Description" />
                    </label>
                  </Flex>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button color="red">Cancel</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button>Edit</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
              <span className="px-2"></span>

              <Dialog.Root>
                <Dialog.Trigger>
                  <Button size="1" color="red">
                    Delete
                  </Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                  <Dialog.Title className=" text-center">
                    Do you really want to delete?
                  </Dialog.Title>

                  <Flex gap="3" mt="4" justify="center">
                    <Dialog.Close>
                      <Button color="green">NO</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button color="red">YES</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </div>
          </Card>
        </div>
        <div className="w-[22%]">
          <Card>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Name:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Topic:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Date:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Place:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Number of seats:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Ticket price:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Currency:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Host:</span>
              <span> 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Thumbnail:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Description:</span>
              <span> Reservations 1</span>
            </div>
            <div className=" mt-3">
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button size={"1"}>Edit Reservations</Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                  <Dialog.Title>Edit Reservations</Dialog.Title>

                  <Flex direction="column" gap="3">
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Name
                      </Text>
                      <TextField.Input placeholder="Enter your full name" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Topic
                      </Text>
                      <TextField.Input placeholder="Topic" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Date
                      </Text>
                      <TextField.Input type="date" placeholder="Date" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Place
                      </Text>
                      <TextField.Input placeholder="Place" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Number of seats
                      </Text>
                      <TextField.Input placeholder="Number of seats" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Ticket price
                      </Text>
                      <TextField.Input placeholder="Ticket price" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Currency
                      </Text>
                      <TextField.Input placeholder="Currency" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Thumbnail
                      </Text>
                      <TextField.Input placeholder="Thumbnail" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Description
                      </Text>
                      <TextField.Input placeholder="Description" />
                    </label>
                  </Flex>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button color="red">Cancel</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button>Edit</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
              <span className="px-2"></span>

              <Dialog.Root>
                <Dialog.Trigger>
                  <Button size="1" color="red">
                    Delete
                  </Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                  <Dialog.Title className=" text-center">
                    Do you really want to delete?
                  </Dialog.Title>

                  <Flex gap="3" mt="4" justify="center">
                    <Dialog.Close>
                      <Button color="green">NO</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button color="red">YES</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </div>
          </Card>
        </div>
        <div className="w-[22%]">
          <Card>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Name:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Topic:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Date:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Place:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Number of seats:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Ticket price:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Currency:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Host:</span>
              <span> 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Thumbnail:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Description:</span>
              <span> Reservations 1</span>
            </div>
            <div className=" mt-3">
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button size={"1"}>Edit Reservations</Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                  <Dialog.Title>Edit Reservations</Dialog.Title>

                  <Flex direction="column" gap="3">
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Name
                      </Text>
                      <TextField.Input placeholder="Enter your full name" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Topic
                      </Text>
                      <TextField.Input placeholder="Topic" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Date
                      </Text>
                      <TextField.Input type="date" placeholder="Date" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Place
                      </Text>
                      <TextField.Input placeholder="Place" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Number of seats
                      </Text>
                      <TextField.Input placeholder="Number of seats" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Ticket price
                      </Text>
                      <TextField.Input placeholder="Ticket price" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Currency
                      </Text>
                      <TextField.Input placeholder="Currency" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Thumbnail
                      </Text>
                      <TextField.Input placeholder="Thumbnail" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Description
                      </Text>
                      <TextField.Input placeholder="Description" />
                    </label>
                  </Flex>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button color="red">Cancel</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button>Edit</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
              <span className="px-2"></span>

              <Dialog.Root>
                <Dialog.Trigger>
                  <Button size="1" color="red">
                    Delete
                  </Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                  <Dialog.Title className=" text-center">
                    Do you really want to delete?
                  </Dialog.Title>

                  <Flex gap="3" mt="4" justify="center">
                    <Dialog.Close>
                      <Button color="green">NO</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button color="red">YES</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </div>
          </Card>
        </div>
        <div className="w-[22%]">
          <Card>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Name:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Topic:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Date:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Place:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Number of seats:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Ticket price:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Currency:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Host:</span>
              <span> 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Thumbnail:</span>
              <span> Reservations 1</span>
            </div>
            <div className="flex align-middle">
              <span className="font-medium mr-1"> Description:</span>
              <span> Reservations 1</span>
            </div>
            <div className=" mt-3">
              <Dialog.Root>
                <Dialog.Trigger>
                  <Button size={"1"}>Edit Reservations</Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                  <Dialog.Title>Edit Reservations</Dialog.Title>

                  <Flex direction="column" gap="3">
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Name
                      </Text>
                      <TextField.Input placeholder="Enter your full name" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Topic
                      </Text>
                      <TextField.Input placeholder="Topic" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Date
                      </Text>
                      <TextField.Input type="date" placeholder="Date" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Place
                      </Text>
                      <TextField.Input placeholder="Place" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Number of seats
                      </Text>
                      <TextField.Input placeholder="Number of seats" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Ticket price
                      </Text>
                      <TextField.Input placeholder="Ticket price" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Currency
                      </Text>
                      <TextField.Input placeholder="Currency" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Thumbnail
                      </Text>
                      <TextField.Input placeholder="Thumbnail" />
                    </label>
                    <label>
                      <Text as="div" size="2" mb="1" weight="bold">
                        Description
                      </Text>
                      <TextField.Input placeholder="Description" />
                    </label>
                  </Flex>

                  <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                      <Button color="red">Cancel</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button>Edit</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
              <span className="px-2"></span>

              <Dialog.Root>
                <Dialog.Trigger>
                  <Button size="1" color="red">
                    Delete
                  </Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                  <Dialog.Title className=" text-center">
                    Do you really want to delete?
                  </Dialog.Title>

                  <Flex gap="3" mt="4" justify="center">
                    <Dialog.Close>
                      <Button color="green">NO</Button>
                    </Dialog.Close>
                    <Dialog.Close>
                      <Button color="red">YES</Button>
                    </Dialog.Close>
                  </Flex>
                </Dialog.Content>
              </Dialog.Root>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Reservations;
