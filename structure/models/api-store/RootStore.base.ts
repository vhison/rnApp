/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { AcceptChallengesModel, AcceptChallengesModelType } from "./AcceptChallengesModel"
import { acceptChallengesModelPrimitives, AcceptChallengesModelSelector } from "./AcceptChallengesModel.base"
import { AmountModel, AmountModelType } from "./AmountModel"
import { amountModelPrimitives, AmountModelSelector } from "./AmountModel.base"
import { BetModel, BetModelType } from "./BetModel"
import { betModelPrimitives, BetModelSelector } from "./BetModel.base"
import { BetChallengesModel, BetChallengesModelType } from "./BetChallengesModel"
import { betChallengesModelPrimitives, BetChallengesModelSelector } from "./BetChallengesModel.base"
import { ChallengesModel, ChallengesModelType } from "./ChallengesModel"
import { challengesModelPrimitives, ChallengesModelSelector } from "./ChallengesModel.base"
import { ChallengeSummaryModel, ChallengeSummaryModelType } from "./ChallengeSummaryModel"
import { challengeSummaryModelPrimitives, ChallengeSummaryModelSelector } from "./ChallengeSummaryModel.base"
import { CharityModel, CharityModelType } from "./CharityModel"
import { charityModelPrimitives, CharityModelSelector } from "./CharityModel.base"
import { CurrentTierModel, CurrentTierModelType } from "./CurrentTierModel"
import { currentTierModelPrimitives, CurrentTierModelSelector } from "./CurrentTierModel.base"
import { DonationModel, DonationModelType } from "./DonationModel"
import { donationModelPrimitives, DonationModelSelector } from "./DonationModel.base"
import { FavoriteRideModel, FavoriteRideModelType } from "./FavoriteRideModel"
import { favoriteRideModelPrimitives, FavoriteRideModelSelector } from "./FavoriteRideModel.base"
import { FollowersModel, FollowersModelType } from "./FollowersModel"
import { followersModelPrimitives, FollowersModelSelector } from "./FollowersModel.base"
import { HomeChallengesModel, HomeChallengesModelType } from "./HomeChallengesModel"
import { homeChallengesModelPrimitives, HomeChallengesModelSelector } from "./HomeChallengesModel.base"
import { JoinChallengeModel, JoinChallengeModelType } from "./JoinChallengeModel"
import { joinChallengeModelPrimitives, JoinChallengeModelSelector } from "./JoinChallengeModel.base"
import { JwtModel, JwtModelType } from "./JwtModel"
import { jwtModelPrimitives, JwtModelSelector } from "./JwtModel.base"
import { LeaderBoardModel, LeaderBoardModelType } from "./LeaderBoardModel"
import { leaderBoardModelPrimitives, LeaderBoardModelSelector } from "./LeaderBoardModel.base"
import { LeaderBoardRidesModel, LeaderBoardRidesModelType } from "./LeaderBoardRidesModel"
import { leaderBoardRidesModelPrimitives, LeaderBoardRidesModelSelector } from "./LeaderBoardRidesModel.base"
import { MyBetsModel, MyBetsModelType } from "./MyBetsModel"
import { myBetsModelPrimitives, MyBetsModelSelector } from "./MyBetsModel.base"
import { ParticipantsModel, ParticipantsModelType } from "./ParticipantsModel"
import { participantsModelPrimitives, ParticipantsModelSelector } from "./ParticipantsModel.base"
import { PayerModel, PayerModelType } from "./PayerModel"
import { payerModelPrimitives, PayerModelSelector } from "./PayerModel.base"
import { PayerInfoModel, PayerInfoModelType } from "./PayerInfoModel"
import { payerInfoModelPrimitives, PayerInfoModelSelector } from "./PayerInfoModel.base"
import { PaymentModel, PaymentModelType } from "./PaymentModel"
import { paymentModelPrimitives, PaymentModelSelector } from "./PaymentModel.base"
import { PaymentLinksModel, PaymentLinksModelType } from "./PaymentLinksModel"
import { paymentLinksModelPrimitives, PaymentLinksModelSelector } from "./PaymentLinksModel.base"
import { PelotonsModel, PelotonsModelType } from "./PelotonsModel"
import { pelotonsModelPrimitives, PelotonsModelSelector } from "./PelotonsModel.base"
import { ProgressModel, ProgressModelType } from "./ProgressModel"
import { progressModelPrimitives, ProgressModelSelector } from "./ProgressModel.base"
import { RideModel, RideModelType } from "./RideModel"
import { rideModelPrimitives, RideModelSelector } from "./RideModel.base"

import { RidesModel, RidesModelType } from "./RidesModel"
import { ridesModelPrimitives, RidesModelSelector } from "./RidesModel.base"
import { SettingsModel, SettingsModelType } from "./SettingsModel"
import { settingsModelPrimitives, SettingsModelSelector } from "./SettingsModel.base"
import { ShareModel, ShareModelType } from "./ShareModel"
import { shareModelPrimitives, ShareModelSelector } from "./ShareModel.base"
import { TransactionsModel, TransactionsModelType } from "./TransactionsModel"
import { transactionsModelPrimitives, TransactionsModelSelector } from "./TransactionsModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { VerificationCodeModel, VerificationCodeModelType } from "./VerificationCodeModel"
import { verificationCodeModelPrimitives, VerificationCodeModelSelector } from "./VerificationCodeModel.base"
import { WorkoutMetricsModel, WorkoutMetricsModelType } from "./WorkoutMetricsModel"
import { workoutMetricsModelPrimitives, WorkoutMetricsModelSelector } from "./WorkoutMetricsModel.base"
import { WorkoutsModel, WorkoutsModelType } from "./WorkoutsModel"
import { workoutsModelPrimitives, WorkoutsModelSelector } from "./WorkoutsModel.base"



export type InputChallenges = {
  _id: string
  created_at: string
  duration: string
  endDate: string
  numberOFWeek: string
  rank: number
  startDate: string
  title: string
}
export type InputChallengeSummary = {
  background_image_url: string
  challenge_type: string
  community_progress?: string
  description: string
  digital_background_image_url: string
  end_time: number
  id: string
  start_time: number
  status: string
  symbol_image_url: string
  title: number
  type: string
}
export type InputCurrentTier = {
  detailed_badge_image_url: string
  has_reward: string
  id: string
  metric_display_unit: string
  metric_display_value: number
  metric_value: number
  simple_badge_image_url: number
  title: string
}
export type InputParticipants = {
  total_count: number
}
export type InputProgress = {
  current_tier: InputCurrentTier
  has_joined: string
  metric_display_unit: string
  metric_display_unit_to_next_tier: string
  metric_display_value: number
  metric_display_value_to_next_tier: number
  metric_value: number
  next_tier: InputCurrentTier
}
export type Inputride = {
  content_format?: string
  content_provider?: string
  description?: string
  difficulty_estimate?: number
  difficulty_level?: string
  difficulty_rating_avg?: number
  difficulty_rating_count?: number
  duration?: number
  has_closed_captions?: boolean
  home_peloton_id?: string
  id?: string
  instructor_id?: string
  length?: number
  location?: string
  original_air_time?: number
  overall_estimate?: number
  overall_rating_avg?: number
  overall_rating_count?: number
  pedaling_duration?: number
  pedaling_end_offset?: number
  pedaling_start_offset?: number
  rating?: number
  ride_type_id?: string
  rideId?: string
  scheduled_start_time?: number
  series_id?: string
  studio_peloton_id?: string
  title?: string
  total_in_progress_workouts?: number
  total_ratings?: number
  total_workouts?: number
}
export type InputRide = {
  complete?: boolean
  pelotonRideId?: string
}
export type InputSettings = {
  challenges: InputChallenges[]
  classes: string
  numberOfRides: number
  output: string
  timeToCompleteDays: number
}
export type InputUser = {
  phoneNumber?: string
}
export type InputworkoutMetrics = {
  average_value?: string
  display_name?: string
  display_unit?: string
  max_value?: string
  slug?: string
  values?: number[]
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {

}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryCheckPelotonConnection="queryCheckPelotonConnection",
queryGetChallenges="queryGetChallenges",
queryGetCharity="queryGetCharity",
queryGetFavoriteRide="queryGetFavoriteRide",
queryGetFollowers="queryGetFollowers",
queryGetLeaderBoards="queryGetLeaderBoards",
queryGetMyChallenges="queryGetMyChallenges",
queryGetPaymentHistory="queryGetPaymentHistory",
queryGetPelotonChallenges="queryGetPelotonChallenges",
queryGetPelotonRides="queryGetPelotonRides",
queryGetPelotonWorkout="queryGetPelotonWorkout",
queryGetRideDetail="queryGetRideDetail",
queryGetRides="queryGetRides",
queryGetWorkout="queryGetWorkout",
queryGetWorkoutScore="queryGetWorkoutScore",
queryHello="queryHello",
queryHelloAuth="queryHelloAuth",
queryMe="queryMe"
}
export enum RootStoreBaseMutations {
mutateAcceptChallenge="mutateAcceptChallenge",
mutateAddFavoriteRide="mutateAddFavoriteRide",
mutateConnectPeloton="mutateConnectPeloton",
mutateCreateBet="mutateCreateBet",
mutateCreateDonation="mutateCreateDonation",
mutateCreateReward="mutateCreateReward",
mutateCreateRide="mutateCreateRide",
mutateCreateRides="mutateCreateRides",
mutateCreateShare="mutateCreateShare",
mutateJoinChallenge="mutateJoinChallenge",
mutatePaypalPayment="mutatePaypalPayment",
mutateResendCode="mutateResendCode",
mutateRideComplete="mutateRideComplete",
mutateSignup="mutateSignup",
mutateUpdateUser="mutateUpdateUser",
mutateVerifyCode="mutateVerifyCode"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['AcceptChallenges', () => AcceptChallengesModel], ['Amount', () => AmountModel], ['Bet', () => BetModel], ['BetChallenges', () => BetChallengesModel], ['Challenges', () => ChallengesModel], ['ChallengeSummary', () => ChallengeSummaryModel], ['Charity', () => CharityModel], ['CurrentTier', () => CurrentTierModel], ['Donation', () => DonationModel], ['FavoriteRide', () => FavoriteRideModel], ['Followers', () => FollowersModel], ['HomeChallenges', () => HomeChallengesModel], ['JoinChallenge', () => JoinChallengeModel], ['JWT', () => JwtModel], ['LeaderBoard', () => LeaderBoardModel], ['LeaderBoardRides', () => LeaderBoardRidesModel], ['MyBets', () => MyBetsModel], ['Participants', () => ParticipantsModel], ['Payer', () => PayerModel], ['PayerInfo', () => PayerInfoModel], ['Payment', () => PaymentModel], ['PaymentLinks', () => PaymentLinksModel], ['Pelotons', () => PelotonsModel], ['Progress', () => ProgressModel], ['ride', () => RideModel], ['Ride', () => RideModel], ['Rides', () => RidesModel], ['Settings', () => SettingsModel], ['Share', () => ShareModel], ['Transactions', () => TransactionsModel], ['User', () => UserModel], ['VerificationCode', () => VerificationCodeModel], ['workoutMetrics', () => WorkoutMetricsModel], ['Workouts', () => WorkoutsModel]], [], "js"))
  .props({

  })
  .actions(self => ({
    queryCheckPelotonConnection(variables: { userId: string }, resultSelector: string | ((qb: PelotonsModelSelector) => PelotonsModelSelector) = pelotonsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ checkPelotonConnection: PelotonsModelType}>(`query checkPelotonConnection($userId: String!) { checkPelotonConnection(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new PelotonsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetChallenges(variables: { userId: string }, resultSelector: string | ((qb: MyBetsModelSelector) => MyBetsModelSelector) = myBetsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getChallenges: MyBetsModelType[]}>(`query getChallenges($userId: String!) { getChallenges(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new MyBetsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetCharity(variables: { page: string }, resultSelector: string | ((qb: CharityModelSelector) => CharityModelSelector) = charityModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getCharity: CharityModelType[]}>(`query getCharity($page: String!) { getCharity(page: $page) {
        ${typeof resultSelector === "function" ? resultSelector(new CharityModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetFavoriteRide(variables: { userId: string }, resultSelector: string | ((qb: FavoriteRideModelSelector) => FavoriteRideModelSelector) = favoriteRideModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getFavoriteRide: FavoriteRideModelType[]}>(`query getFavoriteRide($userId: String!) { getFavoriteRide(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new FavoriteRideModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetFollowers(variables: { userId: string }, resultSelector: string | ((qb: FollowersModelSelector) => FollowersModelSelector) = followersModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getFollowers: FollowersModelType[]}>(`query getFollowers($userId: String!) { getFollowers(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new FollowersModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetLeaderBoards(variables: { userId: string }, resultSelector: string | ((qb: LeaderBoardModelSelector) => LeaderBoardModelSelector) = leaderBoardModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getLeaderBoards: LeaderBoardModelType[]}>(`query getLeaderBoards($userId: String!) { getLeaderBoards(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new LeaderBoardModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetMyChallenges(variables: { userId: string }, resultSelector: string | ((qb: BetModelSelector) => BetModelSelector) = betModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getMyChallenges: BetModelType[]}>(`query getMyChallenges($userId: String!) { getMyChallenges(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new BetModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetPaymentHistory(variables: { userId: string }, resultSelector: string | ((qb: PaymentModelSelector) => PaymentModelSelector) = paymentModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getPaymentHistory: PaymentModelType[]}>(`query getPaymentHistory($userId: String!) { getPaymentHistory(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new PaymentModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetPelotonChallenges(variables: { userId: string }, resultSelector: string | ((qb: ChallengesModelSelector) => ChallengesModelSelector) = challengesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getPelotonChallenges: ChallengesModelType[]}>(`query getPelotonChallenges($userId: String!) { getPelotonChallenges(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new ChallengesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetPelotonRides(variables: { userId: string }, resultSelector: string | ((qb: RidesModelSelector) => RidesModelSelector) = ridesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getPelotonRides: RidesModelType[]}>(`query getPelotonRides($userId: String!) { getPelotonRides(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new RidesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetPelotonWorkout(variables: { userId: string }, resultSelector: string | ((qb: WorkoutsModelSelector) => WorkoutsModelSelector) = workoutsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getPelotonWorkout: WorkoutsModelType[]}>(`query getPelotonWorkout($userId: String!) { getPelotonWorkout(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new WorkoutsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetRideDetail(variables?: {  }, resultSelector: string | ((qb: RideModelSelector) => RideModelSelector) = rideModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getRideDetail: RideModelType[]}>(`query getRideDetail { getRideDetail {
        ${typeof resultSelector === "function" ? resultSelector(new RideModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetRides(variables: { userId: string }, resultSelector: string | ((qb: HomeChallengesModelSelector) => HomeChallengesModelSelector) = homeChallengesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getRides: HomeChallengesModelType[]}>(`query getRides($userId: String!) { getRides(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new HomeChallengesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetWorkout(variables: { userId: string }, resultSelector: string | ((qb: WorkoutsModelSelector) => WorkoutsModelSelector) = workoutsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getWorkout: WorkoutsModelType[]}>(`query getWorkout($userId: String!) { getWorkout(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new WorkoutsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetWorkoutScore(variables: { userId: string }, resultSelector: string | ((qb: WorkoutsModelSelector) => WorkoutsModelSelector) = workoutsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getWorkoutScore: WorkoutsModelType[]}>(`query getWorkoutScore($userId: String!) { getWorkoutScore(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new WorkoutsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryHello(variables?: {  }, options: QueryOptions = {}) {
      return self.query<{ hello: string }>(`query hello { hello }`, variables, options)
    },
    queryHelloAuth(variables?: {  }, options: QueryOptions = {}) {
      return self.query<{ helloAuth: string }>(`query helloAuth { helloAuth }`, variables, options)
    },
    queryMe(variables: { userId: string }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ me: UserModelType}>(`query me($userId: String!) { me(userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateAcceptChallenge(variables: { betId: string, hash: string, rideId: string, userId: string }, resultSelector: string | ((qb: AcceptChallengesModelSelector) => AcceptChallengesModelSelector) = acceptChallengesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ acceptChallenge: AcceptChallengesModelType}>(`mutation acceptChallenge($betId: String!, $hash: String!, $rideId: String!, $userId: String!) { acceptChallenge(betId: $betId, hash: $hash, rideId: $rideId, userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new AcceptChallengesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddFavoriteRide(variables: { rideId: string, userId: string }, resultSelector: string | ((qb: FavoriteRideModelSelector) => FavoriteRideModelSelector) = favoriteRideModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addFavoriteRide: FavoriteRideModelType}>(`mutation addFavoriteRide($rideId: String!, $userId: String!) { addFavoriteRide(rideId: $rideId, userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new FavoriteRideModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateConnectPeloton(variables: { password: string, userId: string, userName: string }, resultSelector: string | ((qb: PelotonsModelSelector) => PelotonsModelSelector) = pelotonsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ connectPeloton: PelotonsModelType}>(`mutation connectPeloton($password: String!, $userId: String!, $userName: String!) { connectPeloton(password: $password, userId: $userId, userName: $userName) {
        ${typeof resultSelector === "function" ? resultSelector(new PelotonsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateBet(variables: { amount: number, charityId: string, ownerId: string, percentageSplit: number, rideId: string, rideType: string, settings: InputSettings }, resultSelector: string | ((qb: BetModelSelector) => BetModelSelector) = betModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createBet: BetModelType}>(`mutation createBet($amount: Float!, $charityId: String!, $ownerId: String!, $percentageSplit: Float!, $rideId: String!, $rideType: String!, $settings: InputSettings!) { createBet(amount: $amount, charityId: $charityId, ownerId: $ownerId, percentageSplit: $percentageSplit, rideId: $rideId, rideType: $rideType, settings: $settings) {
        ${typeof resultSelector === "function" ? resultSelector(new BetModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateDonation(variables: { amount: string, email: string, firstName: string, lastName: string, organizationId: string, userId: string }, resultSelector: string | ((qb: DonationModelSelector) => DonationModelSelector) = donationModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createDonation: DonationModelType}>(`mutation createDonation($amount: String!, $email: String!, $firstName: String!, $lastName: String!, $organizationId: String!, $userId: String!) { createDonation(amount: $amount, email: $email, first_name: $firstName, last_name: $lastName, organization_id: $organizationId, userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new DonationModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateReward(variables: { amount: number }, resultSelector: string | ((qb: PaymentModelSelector) => PaymentModelSelector) = paymentModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createReward: PaymentModelType}>(`mutation createReward($amount: Float!) { createReward(amount: $amount) {
        ${typeof resultSelector === "function" ? resultSelector(new PaymentModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateRide(variables: { pelotonRideId: string, rideType: string, userId: string }, resultSelector: string | ((qb: RideModelSelector) => RideModelSelector) = rideModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createRide: RideModelType}>(`mutation createRide($pelotonRideId: String!, $rideType: String!, $userId: String!) { createRide(pelotonRideId: $pelotonRideId, rideType: $rideType, userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new RideModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateRides(variables: { amount: number, charityId: string, pelotonRideId: string, percentageSplit: number, rideType: string, settings: InputSettings, userId: string }, resultSelector: string | ((qb: ShareModelSelector) => ShareModelSelector) = shareModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createRides: ShareModelType}>(`mutation createRides($amount: Float!, $charityId: String!, $pelotonRideId: String!, $percentageSplit: Float!, $rideType: String!, $settings: InputSettings!, $userId: String!) { createRides(amount: $amount, charityId: $charityId, pelotonRideId: $pelotonRideId, percentageSplit: $percentageSplit, rideType: $rideType, settings: $settings, userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new ShareModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateCreateShare(variables: { betId: string, hash: string, url: string, userId: string }, resultSelector: string | ((qb: ShareModelSelector) => ShareModelSelector) = shareModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createShare: ShareModelType}>(`mutation createShare($betId: String!, $hash: String!, $url: String!, $userId: String!) { createShare(betId: $betId, hash: $hash, url: $url, userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new ShareModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateJoinChallenge(variables: { hash: string }, resultSelector: string | ((qb: JoinChallengeModelSelector) => JoinChallengeModelSelector) = joinChallengeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ joinChallenge: JoinChallengeModelType[]}>(`mutation joinChallenge($hash: String!) { joinChallenge(hash: $hash) {
        ${typeof resultSelector === "function" ? resultSelector(new JoinChallengeModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutatePaypalPayment(variables: { amount: string, userId: string }, resultSelector: string | ((qb: PaymentLinksModelSelector) => PaymentLinksModelSelector) = paymentLinksModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ paypalPayment: PaymentLinksModelType[]}>(`mutation paypalPayment($amount: String!, $userId: String!) { paypalPayment(amount: $amount, userId: $userId) {
        ${typeof resultSelector === "function" ? resultSelector(new PaymentLinksModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateResendCode(variables: { phoneNumber: string }, resultSelector: string | ((qb: VerificationCodeModelSelector) => VerificationCodeModelSelector) = verificationCodeModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ resendCode: VerificationCodeModelType}>(`mutation resendCode($phoneNumber: String!) { resendCode(phoneNumber: $phoneNumber) {
        ${typeof resultSelector === "function" ? resultSelector(new VerificationCodeModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRideComplete(variables: { id: string, ride: InputRide }, resultSelector: string | ((qb: RideModelSelector) => RideModelSelector) = rideModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ rideComplete: RideModelType}>(`mutation rideComplete($id: String!, $ride: InputRide!) { rideComplete(_id: $id, ride: $ride) {
        ${typeof resultSelector === "function" ? resultSelector(new RideModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSignup(variables: { phoneNumber: string }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ signup: UserModelType}>(`mutation signup($phoneNumber: String!) { signup(phoneNumber: $phoneNumber) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUser(variables: { id: string, user: InputUser }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUser: UserModelType}>(`mutation updateUser($id: String!, $user: InputUser!) { updateUser(_id: $id, user: $user) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateVerifyCode(variables: { code: string, phoneNumber: string }, resultSelector: string | ((qb: JwtModelSelector) => JwtModelSelector) = jwtModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ verifyCode: JwtModelType}>(`mutation verifyCode($code: String!, $phoneNumber: String!) { verifyCode(code: $code, phoneNumber: $phoneNumber) {
        ${typeof resultSelector === "function" ? resultSelector(new JwtModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
