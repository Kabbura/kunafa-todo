plugins {
    kotlin("js") version "1.7.10"
}

group = "com.narbase"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.narbase.kunafa:core:0.3.0-beta.7")
}


kotlin {
    js(IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }
        }
    }
}