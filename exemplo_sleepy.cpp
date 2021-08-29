#include "sleepy_discord/sleepy_discord.h"

using std::getenv;
using std::string;

class MyClientClass : public SleepyDiscord::DiscordClient {
public:
	using SleepyDiscord::DiscordClient::DiscordClient;
	void onMessage(SleepyDiscord::Message message) override {
		if (message.startsWith("whcg hello"))
			sendMessage(message.channelID, "Hello " + message.author.username);
	}
};

int main() {

    string tkn = getenv("TOKEN");

	MyClientClass client(tkn, SleepyDiscord::USER_CONTROLED_THREADS);
	client.run();
}