import MockingService from "../services/mocking"

const getMockingPets = (req, res) => {
    const pets = MockingService.generateMockingPets(10);
    res.send({status: "success", payload: pets});
}

const getMockingUsers = (req, res) => {
    const users = await MockingService.generateMockingUsers(10);
    res.send({status: "success", payload: users});
}

export default {
    getMockingPets,
    getMockingUsers
}